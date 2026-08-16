# CLAUDE.md — reglas de trabajo del repositorio

> Contexto operativo para agentes y para quien llegue nuevo. **El relato completo está en
> [`HANDOFF.md`](HANDOFF.md)**: de dónde viene el curso, qué decisiones se tomaron y qué muerde.
> Este archivo es la versión corta y ejecutable.

**Investigación en Cuidados Paliativos y Rehabilitación** · código 37543013 · plan 2377 · 3 créditos
Maestría en Cuidados Paliativos · Facultad de Enfermería · Universidad Antonio Nariño · 2026-II
Repositorio **público** con GitHub Pages: https://jboglop.github.io/CP_Inv_Rehabilita/

---

## Las cinco reglas innegociables

**1 · Portabilidad sin conexión.** Cada HTML abre con doble clic, sin servidor y sin internet.
Sin Google Fonts, sin librerías desde CDN, sin `<iframe>`. Los tokens de diseño se **copian en
línea** dentro del `<style>` de cada página; `_shared/tokens.css` es fuente canónica, no enlace.

> Los `<a href="https://…">` sí se conservan: son enlaces, no recursos que se carguen.
> Incrustar una librería en el archivo **no viola la portabilidad: la cumple.**

Parte de los estudiantes ejerce en municipios donde la conectividad no se da por supuesta.

**2 · Sin datos de estudiantes.** El repositorio es público e indexable. No entra ningún nombre,
código ni calificación. Al repositorio se añade **archivo por archivo, nunca carpetas enteras**;
el `.gitignore` es la red de seguridad, no el procedimiento.

**3 · No se designa a nadie por su pronóstico.** «persona con enfermedad avanzada», no «paciente
terminal». **Excepción:** las citas literales de estudios y normas, donde cambiar la palabra
alteraría la cita. La regla se aplica a la voz del curso, no a lo que dice una fuente.

**4 · Material de terceros: se cita, no se reproduce.** Libros, capítulos y artículos se
referencian en APA 7 con DOI. Los PDF descargados viven en Google Drive (`referencias/`, ignorada),
nunca en el repositorio. El deck enlaza la cita, no el archivo.

**5 · Los secretos nunca en el HTML.** Contraseñas, claves de examen calificado y URL de Apps
Script van en `config.js` (en `.gitignore`); la plantilla es `config.example.js`. Distinto es un
quiz de **autoevaluación** que revela la respuesta al hacer clic (como el de la sesión 01): es
formativo, su clave es visible a propósito y no es un secreto.

---

## Antes de cada commit

```bash
node scripts/verificar.js
```

Cinco comprobaciones: enlaces rotos · recursos externos · datos personales · lenguaje del curso ·
coherencia entre la portada y el manifiesto. Sale con código 1 si algo bloquea. Distingue
**infracción de cita** y **dato duro de mención**: sus avisos ámbar son para leer, no para obedecer
a ciegas. Si aparece un falso positivo, se afina el detector — no se rompe el contenido para
callarlo.

**Lo que no comprueba: que la página se vea bien.** Hay que abrirla en el navegador **con el wifi
apagado**, comprobar que la consola no da errores, navegar con el teclado y verificar que se lee a
375 px de ancho.

---

## Estructura

```
index.html                 portada del curso · la mantiene una persona, a mano
README.md                  cara pública del repositorio en GitHub
HANDOFF.md                 relato completo del proyecto · punto de entrada
CLAUDE.md                  este archivo

sesiones/
  _sesiones.json           ← LISTA CANÓNICA de las 16 sesiones
  sNN-slug/
    index.html             ficha pública de la sesión (generada)
    README.md              nota de trabajo del docente
    clase.html             el deck, cuando exista (sesión 01 lo tiene)
    rubrica.md             instrumento de evaluación de la sesión

_shared/
  tokens.css               paleta y tipografía · fuente canónica, se copia en línea
  plantilla-sesion.html    molde del que nace cada ficha

docs/                      syllabus transcrito, calendario, evaluación, metodología, competencias
recursos/                  referencias.bib, plantillas, herramientas TIC
evaluacion/                consolidados por corte (sin datos personales)
scripts/
  verificar.js             las cinco comprobaciones previas a publicar
  nueva-sesion.js          crea las fichas de sesión que falten
config.example.js          plantilla de secretos → copiar a config.js
.nojekyll                  imprescindible · ver abajo
```

### Crear o actualizar una sesión

Se edita el array `sesiones` de `sesiones/_sesiones.json` y se ejecuta:

```bash
node scripts/nueva-sesion.js --listar   # qué haría
node scripts/nueva-sesion.js            # crearlo
```

**Nunca sobrescribe.** Crea solo lo que falta y deja intacto lo editado a mano. Después hay que
**añadir la sesión al cronograma de `index.html`**; la comprobación 5 falla hasta que se haga.
Cuando una sesión estrena material, se pone `material` en el manifiesto y su ficha pasa de
«en preparación» a enlazar el deck.

### Por qué las carpetas se llaman por contenido y no por fecha

Las fechas de 2026-II son provisionales (16 jueves desde el 6 de agosto). Con slugs de contenido
—`s03-realidad-virtual-y-tecnologias`, no `s03-20-ago`— reprogramar mueve texto en el manifiesto y
la portada, no rutas, y ningún enlace ya compartido se rompe.

---

## Sistema de diseño

El color significa la unidad, no decora. La paleta es **fría —azules y grises—** por decisión del
docente. Seis acentos, uno por unidad, elegidos por búsqueda exhaustiva y validados contra
daltonismo (ver la cabecera de `_shared/tokens.css`). Como seis tonos fríos no pueden separarse del
todo bajo daltonismo, **el color nunca es el único canal**: la etiqueta «Unidad N» y el número de
sesión acompañan siempre al color.

| Unidad | Acento | Unidad | Acento |
|---|---|---|---|
| U1 · Abordajes | `u1` azul | U4 · Neurodegenerativos | `u4` cielo |
| U2 · Cáncer | `u2` pizarra | U5 · Demencia y fragilidad | `u5` teal |
| U3 · Falla de órgano | `u3` índigo | U6 · Eventos catastróficos | `u6` glicina |
| Transversal · portada, avisos, evaluación | `marca` azul-acero | | |

**No inventes colores nuevos ni cambies los hex.** El CSS usa siempre `var(--acento*)`, nunca el
color concreto, para que cambiar de unidad sea una sola edición. Tipografía: fuentes del sistema
(`--sans`, `--serif`, `--mono`). Nunca webfonts — regla 1.

Las **fichas y la portada** son de tema claro único. Un **deck** rico (como la sesión 01) puede
declarar modo oscuro copiando también los tokens oscuros documentados en `tokens.css`.

---

## Cosas que muerden

**`.nojekyll` no es opcional.** Sin él, Jekyll descarta en silencio toda carpeta que empiece por
guion bajo, y `_shared/` desaparecería del sitio publicado **sin ningún error visible**. El workflow
de Pages falla a propósito si el archivo no está.

**Las páginas de detalle son `index.html`, no `README.md`.** Con `.nojekyll` activo, un `README.md`
dentro de una carpeta no se renderiza. Los `README.md` de las sesiones son notas de trabajo del
docente, no páginas.

**Gráficos:** uno estático se convierte a **SVG en línea**; uno con interacción lleva su JavaScript
**incrustado** en el archivo. La fuente y los colores suelen estar también dentro del JavaScript del
gráfico, no solo en el CSS. (El deck de la sesión 01 dibuja sus trayectorias y su exportación PNG
así, sin dependencias.)

**Los PDF de `referencias/` no se versionan.** Son material de terceros con derechos de autor;
viven en Google Drive y se citan en APA 7. El `.gitignore` los atrapa, pero la regla es no añadirlos.

## Este repositorio vive en Google Drive

Es decisión del docente y se respeta. El riesgo es que la sincronización de Drive corrompa `.git` o
bloquee archivos abiertos en otro programa. **Mitigación: commitear y empujar a menudo** — el remoto
en GitHub es el respaldo real, y lo único irrecuperable sería trabajo sin empujar.
