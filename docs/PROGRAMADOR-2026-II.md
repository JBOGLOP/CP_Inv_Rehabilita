# Programador — Investigación en Cuidados Paliativos y Rehabilitación

> Código **37543013** · Plan **2377** · **3 créditos** · Semestre **2026-II**
> Maestría en Cuidados Paliativos · Facultad de Enfermería · Universidad Antonio Nariño
> Docente: Jorge Wilhem Bogoya López
>
> **Franja de este espacio académico:** viernes de 2:00 a 5:00 p. m., a partir del 21 de agosto
> **Fuente del calendario:** `HORARIOS 2026 - II.pdf` · Dirección de la Maestría

Este archivo es el **análisis**. El entregable firmable es
[`Programador_2026-II.docx`](Programador_2026-II.docx), diligenciado sobre el formato oficial
`4. Formato. Programador.docx`. Se genera, no se escribe a mano:

```bash
python scripts/generar-programador.py     # requiere python-docx
```

El script rellena la plantilla institucional real —no la recrea— para que conserve estilos,
márgenes y encabezados de la Vicerrectoría. Si cambia algo, se edita la tabla `FILAS` del script y
se regenera.

---

## 1. Lo que el calendario permite de verdad

El calendario oficial fija los fines de semana de encuentro para **toda la Maestría**. La franja de
este espacio académico —**viernes de 2:00 a 5:00 p. m., desde el 21 de agosto**— la confirmó el
docente. Los viernes por la mañana los ocupa el Seminario de fundamentación (mismo docente); este
curso va el viernes por la tarde. Sobre esas dos cosas, las sesiones son:

| Fecha | Día | Modalidad (del calendario) | ¿Sesión de este curso? |
|---|---|---|---|
| 31 julio | viernes | Inducción de estudiantes nuevos | ❌ No es de asignatura |
| 8 agosto | sábado | Sincrónico | ❌ Antes del inicio (21 ago) y no es viernes |
| **21 agosto** | **viernes** | **Presencial** · Circunvalar | ✅ **Sesión 1** |
| **4 septiembre** | **viernes** | **Sincrónico** | ✅ **Sesión 2** |
| **18 septiembre** | **viernes** | **Presencial** | ✅ **Sesión 3** |
| **2 octubre** | **viernes** | **Sincrónico** | ✅ **Sesión 4** |
| **16 octubre** | **viernes** | **Presencial** | ✅ **Sesión 5** |
| **30 octubre** | **viernes** | **Sincrónico** | ✅ **Sesión 6** |
| 13 noviembre | viernes | Encuentro de investigación | ❌ **Solo estudiantes de tesis II** |
| **20 noviembre** | **viernes** | **Presencial** | ✅ **Sesión 7** |

**Resultado: siete sesiones de viernes.** Cuatro presenciales (21 ago, 18 sep, 16 oct, 20 nov) y
tres sincrónicas (4 sep, 2 oct, 30 oct), tal como la modalidad de cada fin de semana lo indica en
el calendario. El 13 de noviembre queda registrado en el programador como encuentro institucional
de tesis II, ajeno a este espacio.

---

## 2. Lo que hay que confirmar con la Dirección

**Las horas presenciales no cuadran con el programa.**

| | Declarado | Real |
|---|---|---|
| Horas presenciales | **48** | 7 sesiones × 3 h = **21** |

Faltan 27 horas, más de la mitad. **No es un error de esta programación:** el mismo desajuste
aparece en el Seminario de fundamentación (48 declaradas frente a 21 reales) y en los cursos de
2026-I, lo que sugiere una convención institucional de conteo. En el programador se registran las
48 declaradas, por coherencia con el contenido programático aprobado.

---

## 3. Distribución de las siete sesiones

Seis unidades en **una sesión cada una**, más una sesión de cierre integrador. La Unidad 1, que
tiene tres temas, se comprime en la primera sesión junto con la presentación del curso. Cada corte
cierra en su última sesión.

| # | Fecha | Sem | Modalidad | Unidad · contenido | Corte |
|---|---|---|---|---|---|
| **1** | vie **21 ago** | 4 | Presencial | Presentación + **U1** · declinación funcional, trayectorias, modelos de intervención y tecnologías (RV, TIC, IA generativa) | C1 |
| **2** | vie **4 sep** | 6 | Sincrónico | **U2 · cáncer** · rehabilitación física y psicosocial, ámbitos y medición | C1 · **entrega 35 %** |
| **3** | vie **18 sep** | 8 | Presencial | **U3 · falla de órgano** · rehabilitación cardiopulmonar, disfagia, ámbitos y medición | C2 |
| **4** | vie **2 oct** | 10 | Sincrónico | **U4 · neurodegenerativos** *(en inglés)* · EM, ELA, parálisis cerebral, ámbitos y medición | C2 |
| **5** | vie **16 oct** | 12 | Presencial | **U5 · demencia y fragilidad** · rehabilitación, ámbitos y cambio mínimo importante | C2 · **entrega 35 %** |
| **6** | vie **30 oct** | 14 | Sincrónico | **U6 · eventos catastróficos** · geriatría, espasticidad, ámbitos y medición | C3 |
| **7** | vie **20 nov** | 17 | Presencial | Seminario integrador · socialización de productos · cierre | C3 · **entrega 30 %** |

**Evaluación:** primer corte 35 % · segundo corte 35 % · producto final 30 %.

Los 18 subtemas del contenido programático quedan cubiertos, sin excepción. Cada sesión se
descompone en tres bloques horarios (2–3, 3–4, 4–5 p. m.) en el `.docx`, como manda el formato.

> **Sobre las entregas.** El cierre del primer corte cae en la sesión 2 (4 sep), que es sincrónica;
> la entrega se recibe en línea. Los cierres de segundo corte (16 oct) y del producto final (20 nov)
> caen en sesiones presenciales.

---

## 4. Lo que cuesta la compresión

El contenido programático tiene seis unidades de tres temas cada una —dieciocho temas—. En siete
sesiones de tres horas, **cada unidad entra en una sola sesión**, y la Unidad 1 comparte la suya con
la presentación. Eso es una hora por tema, o menos.

**Hay que recortar de verdad**, no resumir: elegir qué se dicta en el encuentro y qué pasa a las 6
horas de trabajo independiente de cada sesión. La sesión 1 ya está construida como referencia (deck
interactivo en `sesiones/s01-declinacion-funcional/clase.html`); cubre el Tema 1 de la Unidad 1 con
holgura en tres horas, así que meter además los temas 2 y 3 obliga a pasar buena parte a lectura
previa.

> **Nota sobre el sitio del curso.** El sitio web (`index.html` y `sesiones/`) se construyó con
> **16 sesiones**, antes de tener el calendario oficial. El calendario real da **7**. El sitio y el
> programador quedan desalineados hasta reconciliarlos; el programador (este documento y el `.docx`)
> es ahora la referencia buena.

---

## 5. Inconsistencias del contenido programático (para la Dirección)

Ya señaladas al diligenciar el material; ninguna bloquea el programador.

1. **Peso del tercer corte:** el syllabus dice 30 % en una columna y 35 % en otra. Se usa 30 %, que
   completa el 100 %.
2. **Columnas de evaluación vacías:** «Resultado de aprendizaje» y «Método de evaluación» en blanco
   para los tres cortes. Hay que definir los tres productos.
3. **Referencia truncada:** «Enguell H, Harwood RH. What palliative care can learn…» (texto guía 14).
4. **Referencia duplicada:** Timm, Thuesen y Clark (2021), como texto guía 2 y complementario 7.
5. **Atribución errónea:** el tercer párrafo de la justificación es una traducción del *abstract* de
   Santiago-Palma y Payne (2001), pero está citado como Jones & Bunnell y Eva & Payne.

---

## 6. Pendiente

**Con la Dirección**
- [ ] Aclarar las **48 horas presenciales** declaradas frente a las 21 reales (§2).
- [ ] Señalar las cinco inconsistencias del §5 para la próxima actualización del contenido programático.

**Del docente**
- [ ] Definir los **tres productos de evaluación** y fijar sus fechas de entrega dentro de cada corte.
- [ ] Decidir qué se dicta y qué pasa a lectura previa en cada unidad comprimida (§4).
- [ ] Reconciliar el sitio (16 → 7 sesiones) contra esta programación.
