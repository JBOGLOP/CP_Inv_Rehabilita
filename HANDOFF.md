# HANDOFF — Investigación en Cuidados Paliativos y Rehabilitación

> **Qué es este documento.** El punto de entrada del proyecto. Si alguien —usted dentro de tres
> meses, un colega, o un agente de IA— abre esta carpeta sin contexto, esto es lo que lee primero.
>
> **Asignatura:** Investigación en Cuidados Paliativos y Rehabilitación · Código **37543013** ·
> Plan **2377** · **3 créditos**
> **Programa:** Maestría en Cuidados Paliativos · Facultad de Enfermería · Universidad Antonio Nariño
> **Docente:** Jorge Wilhem Bogoya López · jbogoya63@uan.edu.co
> **Semestre:** 2026-II · fechas **provisionales** (16 jueves desde el 6 de agosto de 2026)
> **Repositorio:** https://github.com/JBOGLOP/CP_Inv_Rehabilita
> **Sitio:** https://jboglop.github.io/CP_Inv_Rehabilita/
> **Actualizado:** agosto de 2026

---

## 1. Qué es este curso

Un espacio académico de la maestría que recorre **seis trayectorias de enfermedad** —abordajes
generales, cáncer, falla de órgano, trastornos neurodegenerativos, demencia y fragilidad, eventos
catastróficos— preguntando, en cada una, **qué evidencia sostiene la rehabilitación paliativa, cómo
se mide el resultado y qué falta por investigar**. No es una asignatura de técnicas de
rehabilitación: es una asignatura de investigación, con la rehabilitación como objeto.

El hilo, que sale del propio contenido programático y del capítulo de Tiberini:

> La rehabilitación no se opone al cuidado paliativo: comparten el objetivo de calidad de vida.
> **Lo que cambia con cada trayectoria es cuándo y cómo rehabilitar** — y esa respuesta hay que
> buscarla en la evidencia, que en varias trayectorias todavía es escasa.

144 horas declaradas (48 presenciales + 96 de trabajo independiente). En el calendario real son
**7 sesiones** de 3 h, los viernes de 2:00 a 5:00 p. m., del 21 de agosto al 20 de noviembre de
2026 (21 h efectivas; ver el programador). Tres cortes (35 / 35 / 30 %). La Unidad 4 se desarrolla
en inglés.

---

## 2. De dónde viene la estructura

Este proyecto adopta el **mismo andamiaje de última generación** que los otros cursos de la maestría
(*Seminario de fundamentación*, *Contexto Histórico y Legal*, *Investigación CP*): portada única
servida por GitHub Pages, manifiesto canónico de sesiones, sistema de diseño con tokens copiados en
línea, verificador de cinco comprobaciones y generador de fichas. Las reglas de trabajo están en
[`CLAUDE.md`](CLAUDE.md); vienen de cursos anteriores y funcionaron.

Lo que **no** se copió fue el color: aquí la paleta es **fría —azules y grises—** por decisión del
docente, no cálida. El resto de la metodología es común, para que el semestre se lea como una sola
cosa.

---

> 🟢 **Antes de construir la sesión 02, lea
> [`HANDOFF-AULA-INVERTIDA.md`](HANDOFF-AULA-INVERTIDA.md).** Trae el método con el que se está
> trabajando en el *Seminario de fundamentación* —aula invertida con entregable previo, backend
> propio y tablero de conducción— y cómo adoptarlo aquí.
>
> La incoherencia que señalaba su §0 (manifiesto 16 vs programador 7) **ya está resuelta**: el
> sitio se reconcilió a **7 sesiones** el 16 de agosto de 2026, sincronizado con el programador.
> Falta el motor de aula invertida (§4 de ese documento) y convertir la sesión 01.

---

## 3. Estado actual

### Hecho

- **Andamiaje completo**, al nivel del estándar de la maestría:
  - `index.html` — portada del curso (Pages sirve esto, no el README).
  - `sesiones/_sesiones.json` — lista canónica de las 7 sesiones.
  - `_shared/tokens.css` + `_shared/plantilla-sesion.html` — sistema de diseño.
  - `scripts/verificar.js` (5 comprobaciones) y `scripts/nueva-sesion.js` (generador que nunca
    sobrescribe), en Node.
  - `.nojekyll` + `.github/workflows/pages.yml` — despliegue por Actions.
  - `.gitignore` endurecido y `config.example.js` (patrón de secretos, aún sin uso).
- **Las 7 fichas de sesión** publicadas, con su fecha, temas y lecturas, en orden cronológico.
- **La sesión 01 construida y verificada** como ejemplar: deck HTML interactivo de doble modo
  (aula / estudio), con temporizador de bloques, paneles de trayectoria, autoevaluación de 8
  preguntas con fuente, y taller exportable a PNG. Vive en
  `sesiones/s01-declinacion-funcional/clase.html`.
- **`docs/`** con el contenido programático transcrito a Markdown, calendario, plan de evaluación,
  metodología y competencias.

### Falta

| Qué | Detalle |
|---|---|
| **Motor de aula invertida** | Entregable previo + backend + tablero. Plan y motor portable en [`HANDOFF-AULA-INVERTIDA.md`](HANDOFF-AULA-INVERTIDA.md) |
| **Convertir S02–S07** | 6 sesiones. La ficha ya existe y dice «en preparación»; el material se hace uno a uno |
| **Corregir el syllabus** | Cinco inconsistencias detectadas en el documento oficial (§5) |
| **Rúbricas de los tres cortes** | La columna «Método de evaluación» del syllabus está vacía |

---

## 4. Cómo se trabaja aquí

Las reglas están en [`CLAUDE.md`](CLAUDE.md). En resumen:

1. **Se edita el manifiesto** (`sesiones/_sesiones.json`), no las fichas a mano.
2. **`node scripts/nueva-sesion.js`** crea lo que falte (nunca sobrescribe).
3. Cuando una sesión estrena deck, se pone `material` en su entrada del manifiesto y se construye
   `clase.html` en su carpeta, autocontenido y portable (regla 1).
4. **`node scripts/verificar.js`** antes de cada commit; verde o se arregla.
5. Se abre en el navegador **con el wifi apagado** — lo que el verificador no puede comprobar.
6. **Commit y push a menudo**: el proyecto vive en Google Drive y el remoto es el respaldo real.

Para construir un deck nuevo, el de la sesión 01 es la referencia: un archivo HTML, tokens de
`_shared/tokens.css` copiados en línea, acento de la unidad, cero recursos externos.

---

## 5. Lo que hay que confirmar con la dirección

| # | Asunto | Por qué importa |
|---|---|---|
| 1 | **48 horas presenciales vs. 21 reales** | El calendario ya está confirmado (7 viernes, 2-5 pm). El syllabus declara 48 h presenciales; el calendario da 21 (7 × 3). Misma convención «la mitad» que el Seminario. Ver `docs/PROGRAMADOR-2026-II.md` §2 |
| 2 | **Peso del tercer corte** | El syllabus dice 30 % en una columna y 35 % en otra. Aquí se usa 30 %, que completa el 100 %. Ver `docs/plan-de-evaluacion.md` |
| 3 | **Columnas vacías de evaluación** | La tabla de criterios del syllabus deja en blanco «Resultado de aprendizaje» y «Método». Se propusieron valores; falta validarlos |
| 4 | **Referencia truncada** | «Enguell H, Harwood RH. What palliative care can learn…» (texto guía 14) está incompleta en el documento oficial |
| 5 | **Referencia duplicada** | Timm, Thuesen y Clark (2021) aparece como texto guía 2 y como complementario 7 |

Un hallazgo más, ya incorporado a la clase 01: el tercer párrafo de la justificación del syllabus es
una traducción del *abstract* de Santiago-Palma y Payne (2001), pero está citado como Jones &
Bunnell y Eva & Payne. Conviene corregir la atribución en el `.docx`.

---

## 6. Estructura de la carpeta

```
HANDOFF.md                 ← este documento · el relato completo
CLAUDE.md                  las reglas en versión corta y ejecutable
README.md                  cara pública del repositorio en GitHub
index.html                 portada del curso · se mantiene a mano

sesiones/
  _sesiones.json           ← LISTA CANÓNICA de las 7 sesiones
  sNN-slug/
    index.html             ficha pública (generada)
    README.md              nota de trabajo del docente
    clase.html             el deck (por ahora solo la sesión 01)
    preparacion.html       entregable previo de aula invertida (cuando exista)

_shared/
  tokens.css               paleta y tipografía · se copia en línea, no se enlaza
  plantilla-sesion.html    molde del que nace cada ficha

docs/
  syllabus/                contenido programático oficial (.docx) y su transcripción
  calendario.md            las 16 sesiones y su distribución · fechas provisionales
  plan-de-evaluacion.md    cortes, instrumentos y pesos
  metodologia.md           modelo pedagógico, estrategias y TIC
  competencias.md          competencias institucionales y del programa

recursos/
  referencias/referencias.bib   23 referencias del syllabus
  plantillas/              plan de clase, rúbrica, ficha de lectura crítica, producto final
  herramientas-tic/        Wysa, realidad virtual, apps y OVA

evaluacion/                consolidados por corte (sin datos personales)
scripts/
  verificar.js             las cinco comprobaciones previas a publicar
  nueva-sesion.js          crea las fichas de sesión que falten
config.example.js          plantilla de secretos → copiar a config.js
.nojekyll                  imprescindible
```

### Sobre trabajar en Google Drive

Esta carpeta es a la vez el archivo del curso **y** el repositorio de trabajo. Es decisión del
docente y se respeta, pero la sincronización de Drive puede corromper `.git` o bloquear archivos
abiertos en otro programa. **Mitigación:** el remoto en GitHub es el respaldo real. Commitee y
empuje a menudo. Si `.git` se corrompe, se vuelve a clonar.

---

## 7. Por dónde seguir

1. **Confirmar el calendario (§5.1).** Con el esqueleto ya construido, el coste de un cambio es
   editar fechas en el manifiesto y la portada — no rutas.
2. **Activar GitHub Pages** si no lo está: Settings → Pages → Source: **GitHub Actions**, y
   comprobar que `https://jboglop.github.io/CP_Inv_Rehabilita/` muestra la portada y no el README.
3. **Construir S02.** «Modelos de intervención en rehabilitación paliativa»; la cantera de fuentes
   está en `referencias/` (Nottelmann, Chowdhury, Barawid) y la ficha ya la lista.
4. **Corregir el syllabus** con los cinco puntos del §5.

---

*Fuente única de verdad del proyecto. Manténgalo actualizado: el próximo que lo lea puede ser
usted, sin recordar nada de esto.*
