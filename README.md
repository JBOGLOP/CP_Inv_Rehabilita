# Investigación en Cuidados Paliativos y Rehabilitación

Espacio académico de la **Maestría en Cuidados Paliativos** — Facultad de Enfermería,
Universidad Antonio Nariño.

| Campo | Valor |
|---|---|
| Código | 37543013 |
| Plan de estudios | 2377 |
| Créditos | 3 (144 h: 48 presenciales + 96 de trabajo independiente) |
| Modalidad | Presencial teórico |
| Periodo | 2026-2 |
| Docente | Jorge Wilhem Bogoya López |
| Última actualización del contenido programático | Julio de 2026 |

> **Objetivo general.** Reconocer el enfoque de rehabilitación paliativa, de acuerdo con las
> trayectorias clínicas de enfermedades tributarias de cuidados paliativos desde la investigación.

## Estructura del repositorio

```
.
├── docs/                        Documentación del espacio académico
│   ├── syllabus/                Contenido programático oficial (.docx) y su transcripción .md
│   ├── calendario.md            16 sesiones con fechas ⚠️ provisionales
│   ├── plan-de-evaluacion.md    Cortes, instrumentos y pesos
│   ├── metodologia.md           Modelo pedagógico, estrategias y TIC
│   └── competencias.md          Competencias institucionales y del programa
├── clases/                      Una carpeta por sesión, en orden cronológico
│   └── AAAA-MM-DD_SNN_UX_tema/
│       ├── README.md            Plan de clase (objetivos, agenda, lecturas, trabajo independiente)
│       ├── rubrica.md           Instrumento de evaluación de la sesión
│       ├── diapositivas/        Material del docente
│       ├── lecturas/            Guías de lectura (los PDF no se versionan)
│       ├── talleres/            Guías de taller
│       └── evidencias-estudiantes/   Entregas — no se versionan
├── evaluacion/                  Consolidados por corte (1, 2 y 3)
├── recursos/
│   ├── referencias/referencias.bib   23 referencias del contenido programático
│   ├── plantillas/              Plan de clase, rúbrica, ficha de lectura crítica, producto final
│   └── herramientas-tic/        Wysa, realidad virtual, apps y OVA
└── herramientas/
    └── renombrar_clases.py      Re-fecha las carpetas de clase desde docs/calendario.md
```

Las carpetas de `clases/` empiezan por la fecha (`AAAA-MM-DD`), así que el orden alfabético
del explorador y de GitHub **es** el orden cronológico del semestre.

## Mapa del semestre

| Unidad | Sesiones | Tema |
|---|---|---|
| U1 | S01–S03 | Abordajes de investigaciones en rehabilitación paliativa |
| U2 | S04–S06 | Rehabilitación paliativa en cáncer |
| U3 | S07–S08 | Rehabilitación paliativa en falla de órgano |
| U4 | S09–S10 | Trastornos neurodegenerativos *(unidad en inglés)* |
| U5 | S11–S12 | Demencia y fragilidad |
| U6 | S13–S15 | Eventos catastróficos (ictus severo, fractura de cadera) |
| — | S16 | Seminario integrador y socialización final |

Detalle completo en [`docs/calendario.md`](docs/calendario.md).

## ⚠️ Las fechas son provisionales

El calendario se generó suponiendo **16 sesiones semanales de 3 h, los jueves, desde el
6 de agosto de 2026**. Cuando tengas el calendario institucional:

```bash
# 1. corrige la columna Fecha en docs/calendario.md
# 2. simula el cambio
python herramientas/renombrar_clases.py
# 3. aplícalo (renombra carpetas con git mv y actualiza los README)
python herramientas/renombrar_clases.py --aplicar
```

## Uso diario

- **Preparar una clase:** edita el `README.md` de la sesión y deja el material en
  `diapositivas/` y `talleres/`.
- **Añadir una sesión:** copia [`recursos/plantillas/plan-de-clase.md`](recursos/plantillas/plan-de-clase.md)
  y registra la sesión en `docs/calendario.md`.
- **Cambiar el contenido programático:** actualiza el `.docx` en `docs/syllabus/` **y** la
  transcripción [`contenido-programatico.md`](docs/syllabus/contenido-programatico.md), para que
  el diff de Git muestre qué cambió.

## Privacidad y derechos de autor

Este repositorio es **público**. Por eso:

- Las **evidencias de los estudiantes** y cualquier consolidado de notas están excluidos en
  [`.gitignore`](.gitignore) y no deben subirse (Ley 1581 de 2012, habeas data).
- Los **artículos científicos a texto completo** no se versionan: se distribuyen por el aula
  virtual o mediante el acceso institucional UAN–SINAB. En `lecturas/` van las guías y las
  fichas, no los PDF.

Si prefieres trabajar sin estas restricciones, cambia el repositorio a privado en GitHub
(Settings → Danger Zone → Change visibility).

## Pendientes detectados en el contenido programático

1. **Peso del tercer corte:** el documento dice 30 % en una columna y 35 % en otra.
   Ver [`docs/plan-de-evaluacion.md`](docs/plan-de-evaluacion.md).
2. **Columnas vacías** en la tabla de criterios de evaluación («Resultado de aprendizaje» y
   «Método de evaluación»): se propusieron valores en el plan de evaluación; falta validarlos.
3. **Referencia truncada:** «Enguell H, Harwood RH. What palliative care can learn…» (texto guía
   n.º 14) está incompleta en el documento oficial.
4. **Referencia duplicada:** Timm, Thuesen y Clark (2021) aparece como texto guía n.º 2 y como
   complementario n.º 7.
5. **Secciones vacías:** «Referencias directas de las bases de datos UAN–SINAB» y «Referencias de
   material producido por la UAN» no tienen contenido.
