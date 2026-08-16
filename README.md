# Investigación en Cuidados Paliativos y Rehabilitación

Espacio académico de la **Maestría en Cuidados Paliativos** — Facultad de Enfermería,
Universidad Antonio Nariño.

| Campo | Valor |
|---|---|
| Código | 37543013 · Plan 2377 |
| Créditos | 3 (144 h: 48 presenciales + 96 de trabajo independiente) |
| Modalidad | Presencial teórico |
| Periodo | 2026-II |
| Docente | Jorge Wilhem Bogoya López · jbogoya63@uan.edu.co |

> **Sitio del curso:** https://jboglop.github.io/CP_Inv_Rehabilita/
> **¿Va a trabajar sobre el repositorio?** Empiece por **[HANDOFF.md](HANDOFF.md)**; las reglas
> ejecutables están en **[CLAUDE.md](CLAUDE.md)**.

> **Objetivo general.** Reconocer el enfoque de rehabilitación paliativa, de acuerdo con las
> trayectorias clínicas de enfermedades tributarias de cuidados paliativos, desde la investigación.

## Cómo está organizado

```
index.html                 portada del curso (GitHub Pages sirve esto)
HANDOFF.md · CLAUDE.md      punto de entrada y reglas de trabajo
sesiones/
  _sesiones.json           ← lista canónica de las 16 sesiones
  sNN-slug/                una carpeta por sesión, nombrada por contenido
    index.html             ficha pública (generada desde el manifiesto)
    README.md · rubrica.md nota de trabajo e instrumento de evaluación
    clase.html             el deck interactivo (por ahora, solo la sesión 01)
_shared/                   tokens.css y plantilla-sesion.html (sistema de diseño)
docs/                      syllabus, calendario, evaluación, metodología, competencias
recursos/                  referencias.bib, plantillas, herramientas TIC
evaluacion/                consolidados por corte (sin datos personales)
scripts/                   verificar.js y nueva-sesion.js (Node)
```

Las carpetas de `sesiones/` se nombran por contenido (`s03-falla-de-organo`), no por fecha: si
cambia el calendario, reprograma mueve texto, no rutas. El orden cronológico vive en el manifiesto
y en la portada.

## Mapa del semestre

Siete sesiones, los viernes de 2:00 a 5:00 p. m., del 21 de agosto al 20 de noviembre de 2026
(calendario oficial de la Maestría). Una unidad por sesión más el integrador.

| Sesión | Fecha | Unidad · color | Tema |
|---|---|---|---|
| S01 | vie 21 ago | U1 · azul | Presentación + trayectorias, modelos y tecnologías |
| S02 | vie 4 sep | U2 · pizarra | Rehabilitación paliativa en cáncer *(cierre 1.er corte)* |
| S03 | vie 18 sep | U3 · índigo | Rehabilitación paliativa en falla de órgano |
| S04 | vie 2 oct | U4 · cielo | Trastornos neurodegenerativos *(en inglés)* |
| S05 | vie 16 oct | U5 · teal | Demencia y fragilidad *(cierre 2.º corte)* |
| S06 | vie 30 oct | U6 · glicina | Eventos catastróficos |
| S07 | vie 20 nov | integrador | Socialización y cierre *(producto final)* |

Detalle en [docs/PROGRAMADOR-2026-II.md](docs/PROGRAMADOR-2026-II.md). La **sesión 01** ya tiene clase construida:
[sesiones/s01-declinacion-funcional/clase.html](sesiones/s01-declinacion-funcional/clase.html).

## Flujo de trabajo

```bash
# 1. editar la sesión en el manifiesto
#    sesiones/_sesiones.json
# 2. crear las fichas que falten (nunca sobrescribe)
node scripts/nueva-sesion.js
# 3. comprobar antes de publicar
node scripts/verificar.js
```

`verificar.js` corre cinco comprobaciones —enlaces rotos, recursos externos, datos personales,
lenguaje del curso y coherencia portada ↔ manifiesto— y se ejecuta también en el workflow de Pages
antes de desplegar. Lo que no comprueba es que la página se vea bien: eso hay que verlo en el
navegador, con el wifi apagado.

## Privacidad y derechos de autor

Este repositorio es **público** y GitHub Pages lo indexa. Por eso:

- No entra ningún dato de estudiantes (nombres, códigos, calificaciones). Ver
  [`.gitignore`](.gitignore) y la regla 2 de [CLAUDE.md](CLAUDE.md).
- Los **artículos y capítulos a texto completo** no se versionan: viven en Google Drive
  (`referencias/`, ignorada) y se citan en APA 7. En las lecturas van las citas, no los PDF.

## Pendientes del contenido programático

El syllabus oficial tiene cinco inconsistencias detectadas (peso del tercer corte, columnas de
evaluación vacías, una referencia truncada, una duplicada y una atribución errónea en la
justificación). Están listadas en [HANDOFF.md §5](HANDOFF.md) para corregirlas contra la fuente.
