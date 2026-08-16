#!/usr/bin/env node
/**
 * verificar.js — comprobaciones previas a publicar, en una sola pasada.
 *
 *   node scripts/verificar.js [ruta]     (por defecto: la raíz del repo)
 *
 * Comprueba, en este orden:
 *   1. Enlaces locales rotos
 *   2. Recursos externos que se cargan   (portabilidad sin conexión)
 *   3. Rastros de datos personales       (repo público · Ley 1581/2012)
 *   4. Lenguaje del curso                (no designar por el pronóstico)
 *   5. Portada ↔ manifiesto de sesiones
 *
 * Sale con código 1 si encuentra algo que bloquea la publicación.
 * Lo que NO comprueba: que la página se vea bien. Eso no tiene sustituto:
 * hay que abrirla en el navegador con el wifi apagado.
 */
'use strict';
const fs = require('fs'), path = require('path');

const RAIZ = path.resolve(process.argv[2] || path.join(__dirname, '..'));
const rojo = s => `\x1b[31m${s}\x1b[0m`, verde = s => `\x1b[32m${s}\x1b[0m`;
const amar = s => `\x1b[33m${s}\x1b[0m`, gris = s => `\x1b[90m${s}\x1b[0m`;

function archivos(dir, filtro, acc = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    if (e.name === '.git' || e.name === 'node_modules') continue;
    const p = path.join(dir, e.name);
    if (e.isDirectory()) archivos(p, filtro, acc);
    else if (filtro.test(e.name)) acc.push(p);
  }
  return acc;
}
const rel = f => path.relative(RAIZ, f).replace(/\\/g, '/');
const htmls = archivos(RAIZ, /\.html?$/i);
const textos = archivos(RAIZ, /\.(html?|md|txt|js|css)$/i);

let bloquea = 0, avisa = 0;
const titulo = t => console.log(`\n${'─'.repeat(66)}\n${t}\n${'─'.repeat(66)}`);

// ── 1 · Enlaces locales rotos ────────────────────────────────────────
titulo('1 · Enlaces locales rotos');
{
  let ok = 0; const rotos = [];
  for (const f of htmls) {
    // La plantilla de _shared/ es un molde: sus rutas se resuelven desde donde
    // el generador la instancia (sesiones/<slug>/), no desde donde vive.
    if (/^_shared\/plantilla-/.test(rel(f))) continue;
    const src = fs.readFileSync(f, 'utf8');
    const refs = [...src.matchAll(/(?:href|src)="([^"]+)"/g)].map(m => m[1]);
    const metas = [...src.matchAll(/content="\s*0;\s*url=([^"]+)"/gi)].map(m => m[1]);
    for (const r of [...refs, ...metas]) {
      if (/^(https?:|mailto:|#|data:|javascript:)/i.test(r)) continue;
      if (r.includes('${')) continue;                       // plantilla JS
      if (/(^|\/)config(\.local)?\.js$/.test(r)) continue;  // secreto en .gitignore
      const limpio = r.split('#')[0].split('?')[0];
      if (!limpio) continue;
      let d = path.resolve(path.dirname(f), decodeURIComponent(limpio));
      if (limpio.endsWith('/')) d = path.join(d, 'index.html');
      fs.existsSync(d) ? ok++ : rotos.push(`${rel(f)}  ->  ${r}`);
    }
  }
  rotos.forEach(r => console.log(rojo('  ROTO  ') + r));
  bloquea += rotos.length;
  console.log(rotos.length ? rojo(`\n  ${rotos.length} rotos`) + gris(` · ${ok} válidos`)
                           : verde(`  ✅ ${ok} enlaces válidos, ninguno roto`));
}

// ── 2 · Recursos externos ────────────────────────────────────────────
// Regla 1: cada HTML abre con doble clic, sin conexión. Los <a href> NO
// cuentan: son enlaces, no recursos que se carguen.
titulo('2 · Recursos externos que se cargan');
{
  const PERMITIDOS = [];   // ninguno: portabilidad total
  const porDominio = new Map();
  for (const f of htmls) {
    const src = fs.readFileSync(f, 'utf8');
    const hits = [
      ...src.matchAll(/<(?:script|link|iframe|img|source|video|audio)\b[^>]*\b(?:src|href)="(https?:\/\/[^"]+)"/gi),
      ...src.matchAll(/@import\s+url\(['"]?(https?:\/\/[^)'"]+)/gi),
      ...src.matchAll(/(?:fetch|importScripts)\(\s*['"](https?:\/\/[^'"]+)/gi),
    ];
    for (const m of hits) {
      if (/rel="canonical"/i.test(m[0])) continue;
      const dom = new URL(m[1]).hostname;
      if (PERMITIDOS.includes(dom)) continue;
      if (!porDominio.has(dom)) porDominio.set(dom, new Set());
      porDominio.get(dom).add(rel(f));
    }
  }
  if (!porDominio.size) console.log(verde('  ✅ ningún recurso externo: portabilidad sin conexión intacta'));
  else {
    for (const [dom, fs_] of [...porDominio].sort((a, b) => b[1].size - a[1].size)) {
      console.log(rojo(`  ${dom}`) + gris(`  — ${fs_.size} archivo(s)`));
      [...fs_].sort().forEach(x => console.log(gris(`      ${x}`)));
      bloquea += fs_.size;
    }
  }
}

// ── 3 · Rastros de datos personales ──────────────────────────────────
titulo('3 · Rastros de datos personales');
{
  // duro = bloquea; blando = solo avisa (puede describir el problema, no cometerlo).
  const PATRONES = [
    [/\b\d[.,]\d\s*\/\s*5[.,]0\b/g,            'nota sobre 5,0',             'duro'],
    [/app\.tactiq\.io|otter\.ai|fireflies\.ai/gi, 'enlace a transcripción',  'duro'],
    [/Meeting started:|Participants:/g,        'cabecera de transcripción',  'duro'],
    // El correo institucional del docente es público y debe aparecer. Lo que no
    // puede aparecer es el de ningún estudiante. Se excluyen (a) el del docente,
    // (b) los marcadores de formulario cuya parte local es genérica —nombre@,
    // correo@, usuario@…—, y (c) los dominios de relleno. Un correo estudiantil
    // real (p. ej. sbarreto846@uan.edu.co) sí muerde. Ver la lección §8.4.
    [/\b(?!(?:jbogoya63|nombre|correo|usuario|tucorreo|tu\.correo|midominio|ejemplo|example)@)[\w.%-]+@(?!ejemplo|example|correo\.|dominio|tucorreo|midominio|test\.|mail\.com\b)[\w.-]+\.[a-z]{2,}\b/gi,
     'correo electrónico', 'duro'],
    // El código del curso (37543013) y el del plan (2377) son identificadores
    // PÚBLICOS y deben aparecer; se excluyen para que el aviso solo suene ante un
    // código que no sea uno de esos dos. Un código estudiantil es otra cifra larga.
    [/c[oó]digo\s*(estudiantil)?\s*:?\s*(?!37543013\b|2377\b)\d{6,}/gi, 'posible código estudiantil', 'blando'],
    [/conformaci[oó]n de grupos/gi,            'sección «conformación de grupos»', 'blando'],
    [/integrantes\s*:/gi,                      'lista de integrantes',       'blando'],
  ];
  let n = 0, a = 0;
  for (const f of textos) {
    if (rel(f).startsWith('scripts/')) continue;
    const src = fs.readFileSync(f, 'utf8');
    for (const [re, etiqueta, sev] of PATRONES) {
      const m = src.match(re);
      if (!m) continue;
      const duro = sev === 'duro';
      console.log((duro ? rojo('  DATO  ') : amar('  ¿?    ')) +
        `${rel(f)}  —  ${etiqueta}  ` + gris(`(${m.length}×, p.ej. «${m[0].slice(0, 40)}»)`));
      if (!duro) console.log(gris('          → revisar a mano: puede describir el problema, no cometerlo'));
      duro ? n++ : a++;
    }
  }
  bloquea += n; avisa += a;
  if (!n && !a) console.log(verde('  ✅ sin rastros de datos personales'));
  else if (!n) console.log(verde('  ✅ sin datos personales duros') + gris(` · ${a} aviso(s)`));
}

// ── 4 · Lenguaje del curso ───────────────────────────────────────────
// No se designa a una persona por su pronóstico. SEÑALA, no sustituye: las
// citas de normas y estudios usan el término legítimamente.
titulo('4 · Lenguaje del curso');
{
  const REGLA = /\b(pacientes?|enfermos?|sujetos?)\s+terminal(es)?\b/gi;
  const EXCEPCIONES = /\b(enfermedad|fase|estado|situaci[oó]n|condici[oó]n)\s+terminal/gi;
  let n = 0;
  for (const f of textos) {
    if (rel(f).startsWith('scripts/')) continue;
    const src = fs.readFileSync(f, 'utf8');
    for (const m of src.matchAll(REGLA)) {
      const limpia = t => t.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ');
      const antes = limpia(src.slice(Math.max(0, m.index - 160), m.index));
      const ctx = (antes + limpia(m[0] + src.slice(m.index + m[0].length, m.index + m[0].length + 160))).trim();
      const termino = limpia(m[0]).trim();
      if (EXCEPCIONES.test(ctx)) EXCEPCIONES.lastIndex = 0;
      // ¿Paráfrasis de una norma o cita de un estudio? Se conserva.
      const fuente = new RegExp(
        '\\b(Ley|Sentencia|Resoluci[oó]n|Decreto|art[íi]culo|Art\\.|OMS|WHO|et al|\\(20\\d\\d\\)|jurisprudencia|[CT]-\\d)', 'i'
      ).test(ctx);
      // ¿Se enuncia la propia regla? «X, no Y» / «en vez de Y».
      const menciona = /\b(no|nunca|jam[áa]s|en (?:vez|lugar) de|antes que|frente a)\b[^.]{0,40}$/i.test(antes);
      if (menciona) { console.log(gris('  ok    ') + `${rel(f)}  —  «${termino}» enuncia la regla, no la infringe`); continue; }
      console.log((fuente ? amar('  CITA  ') : rojo('  TERM  ')) + `${rel(f)}  —  «${termino}»`);
      console.log(gris(`          …${ctx.slice(0, 150)}…`));
      console.log(gris(fuente ? '          → cita una norma o estudio: CONSERVAR, verificar a mano'
                              : '          → voz del curso: cambiar a «persona con enfermedad avanzada»'));
      fuente ? avisa++ : n++;
    }
  }
  bloquea += n;
  if (!n && !avisa) console.log(verde('  ✅ sin infracciones'));
}

// ── 5 · Portada ↔ manifiesto de sesiones ─────────────────────────────
titulo('5 · Portada ↔ manifiesto de sesiones');
{
  const manif = path.join(RAIZ, 'sesiones', '_sesiones.json');
  const hub = path.join(RAIZ, 'index.html');
  if (!fs.existsSync(manif) || !fs.existsSync(hub)) {
    console.log(gris('  omitida: falta sesiones/_sesiones.json o index.html'));
  } else {
    let datos = null;
    try { datos = JSON.parse(fs.readFileSync(manif, 'utf8')); }
    catch (e) { console.log(rojo('  ROTO  ') + `sesiones/_sesiones.json no es JSON válido — ${e.message}`); bloquea++; }
    if (datos) {
      const esperadas = datos.sesiones.map(s => s.slug);
      const src = fs.readFileSync(hub, 'utf8');
      const enlazadas = new Set([...src.matchAll(/href="sesiones\/([^/"#?]+)/g)].map(m => decodeURIComponent(m[1])));
      let fallos = 0;
      for (const slug of esperadas) {
        if (!fs.existsSync(path.join(RAIZ, 'sesiones', slug))) {
          console.log(rojo('  FALTA ') + `sesiones/${slug}/ está en el manifiesto pero no en el disco`);
          console.log(gris('          → node scripts/nueva-sesion.js')); fallos++;
        } else if (!enlazadas.has(slug)) {
          console.log(rojo('  SUELTA') + ` sesiones/${slug}/ existe pero la portada no la enlaza`);
          console.log(gris('          → añadirla al cronograma de index.html')); fallos++;
        }
      }
      for (const slug of enlazadas) {
        if (!esperadas.includes(slug)) {
          console.log(rojo('  EXTRA ') + `index.html enlaza sesiones/${slug}/, que no está en el manifiesto`); fallos++;
        }
      }
      bloquea += fallos;
      if (!fallos) console.log(verde(`  ✅ las ${esperadas.length} sesiones del manifiesto existen y están enlazadas`));
    }
  }
}

// ── Resumen ──────────────────────────────────────────────────────────
console.log(`\n${'═'.repeat(66)}`);
console.log(bloquea ? rojo(`  ${bloquea} problema(s) que bloquean la publicación`)
                    : verde('  ✅ las cinco comprobaciones automatizables pasan'));
if (avisa) console.log(amar(`  ${avisa} aviso(s) para revisión humana`));
console.log(gris('  Falta abrir en el navegador con el wifi apagado: consola sin errores,'));
console.log(gris('  navegación por teclado y legible a 375 px.'));
console.log('═'.repeat(66));
process.exit(bloquea ? 1 : 0);
