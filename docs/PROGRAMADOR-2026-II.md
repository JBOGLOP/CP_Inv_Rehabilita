# Programador — Investigación en Cuidados Paliativos y Rehabilitación

> Código **37543013** · Plan **2377** · **3 créditos** · Semestre **2026-II**
> Maestría en Cuidados Paliativos · Facultad de Enfermería · Universidad Antonio Nariño
> Docente: Jorge Wilhem Bogoya López
>
> **Franja de este espacio académico:** sábados de 8:00 a 11:00 *(supuesto — ver §2)*
> **Fuente del calendario:** `HORARIOS 2026 - II.pdf` · Dirección de la Maestría

Este archivo es el **análisis**. El entregable firmable es
[`Programador_2026-II.docx`](Programador_2026-II.docx), diligenciado sobre el formato oficial
`4. Formato. Programador.docx`. Se genera, no se escribe a mano:

```bash
python scripts/generar-programador.py     # requiere python-docx
```

El script rellena la plantilla institucional real —no la recrea— para que conserve estilos,
márgenes y encabezados de la Vicerrectoría. Si cambia la franja o el número de sesiones, se edita
la tabla `FILAS` del script y se regenera.

---

## 1. Lo que el calendario permite de verdad

El calendario oficial trae diez fechas, para **toda la Maestría**. No dice la franja de cada
asignatura; sí fija los fines de semana de encuentro. Los viernes los ocupa el Seminario de
fundamentación (mismo docente); los **sábados** quedan para este espacio académico:

| Fecha | Día | Modalidad | ¿Sesión de este curso? |
|---|---|---|---|
| 31 julio | viernes | Inducción de estudiantes nuevos | ❌ No es de asignatura |
| **8 agosto** | **sábado** | Sincrónico | ✅ Sesión 1 |
| 21–22 agosto | vie–sáb | Presencial · Circunvalar | ✅ **sábado 22** |
| 4–5 septiembre | vie–sáb | Sincrónico | ✅ **sábado 5** |
| 18–19 septiembre | vie–sáb | Presencial | ✅ **sábado 19** |
| 2–3 octubre | vie–sáb | Sincrónico | ✅ **sábado 3** |
| 16–17 octubre | vie–sáb | Presencial | ✅ **sábado 17** |
| 30–31 octubre | vie–sáb | Sincrónico | ✅ **sábado 31** |
| 13 noviembre | viernes | Encuentro de investigación | ❌ **Solo estudiantes de tesis II** |
| 20–21 noviembre | vie–sáb | Presencial | ✅ **sábado 21** |

**Resultado: ocho sesiones de sábado.** El sábado 8 de agosto es un sábado suelto (sin viernes esa
semana), y por eso este curso —de franja sábado— sí lo tiene, a diferencia del Seminario, que al ir
en viernes se queda en siete.

---

## 2. ⚠️ Dos cosas que hay que confirmar con la Dirección

**2.1 · La franja de sábado 8:00–11:00 es un supuesto.** El calendario oficial fija los fines de
semana de encuentro para toda la Maestría, pero no la franja horaria de cada asignatura. Se asume
que este curso ocupa el sábado por la mañana —el complemento del Seminario, que va el viernes— e
incluye el sábado 8 de agosto. Si la franja fuera otra (viernes tarde, otro horario, o sin el 8 de
agosto), **cambian las fechas y el número de sesiones**. El docente conoce su franja real y debe
confirmarla.

**2.2 · Las horas presenciales no cuadran con el programa.**

| | Declarado | Real |
|---|---|---|
| Horas presenciales | **48** | 8 sesiones × 3 h = **24** |

Faltan 24 horas, la mitad exacta. **No es un error de esta programación:** el mismo desajuste —la
mitad— aparece en el Seminario de fundamentación (48 declaradas frente a 21 reales) y en los cursos
de 2026-I, lo que sugiere una convención institucional de conteo. En el programador se registran las
48 declaradas, por coherencia con el contenido programático aprobado.

---

## 3. Distribución de las ocho sesiones

Seis unidades en **2 + 1 + 1 + 1 + 1 + 1** de contenido, más una sesión de cierre integrador. La
Unidad 1 recibe dos sesiones (es la única con material ya construido y con más carga conceptual);
las demás, una cada una. Cada corte cierra en su última sesión.

| # | Fecha | Sem | Modalidad | Unidad · contenido | Corte |
|---|---|---|---|---|---|
| **1** | sáb **8 ago** | 2 | Sincrónico | Presentación + **U1** · declinación funcional, concepto de rehabilitación paliativa y trayectorias | C1 |
| **2** | sáb **22 ago** | 4 | Presencial | **U1** · modelos de intervención; realidad virtual, TIC e IA generativa | C1 |
| **3** | sáb **5 sep** | 6 | Sincrónico | **U2 · cáncer** · rehabilitación física y psicosocial, ámbitos y medición | C1 · **entrega 35 %** |
| **4** | sáb **19 sep** | 8 | Presencial | **U3 · falla de órgano** · rehabilitación cardiopulmonar, disfagia, ámbitos y medición | C2 |
| **5** | sáb **3 oct** | 10 | Sincrónico | **U4 · neurodegenerativos** *(en inglés)* · EM, ELA, parálisis cerebral, ámbitos y medición | C2 |
| **6** | sáb **17 oct** | 12 | Presencial | **U5 · demencia y fragilidad** · rehabilitación, ámbitos y cambio mínimo importante | C2 · **entrega 35 %** |
| **7** | sáb **31 oct** | 14 | Sincrónico | **U6 · eventos catastróficos** · geriatría, espasticidad, ámbitos y medición | C3 |
| **8** | sáb **21 nov** | 17 | Presencial | Seminario integrador · socialización de productos · cierre | C3 · **entrega 30 %** |

**Evaluación:** primer corte 35 % · segundo corte 35 % · producto final 30 %.

Los 18 subtemas del contenido programático quedan cubiertos, sin excepción. Cada sesión se
descompone en tres bloques horarios (8–9, 9–10, 10–11) en el `.docx`, como manda el formato.

---

## 4. Lo que cuesta la compresión

El contenido programático está escrito con seis unidades de tres temas cada una —dieciocho temas—.
En ocho sesiones de tres horas, cada unidad de cáncer, falla de órgano, neurodegenerativos,
demencia y eventos catastróficos entra en **una sola sesión**. Eso es una hora por tema.

**Hay que recortar de verdad**, no resumir: elegir qué se dicta en el encuentro y qué pasa a las 6
horas de trabajo independiente de cada sesión. La sesión 1 ya está construida como referencia
(deck interactivo en `sesiones/s01-declinacion-funcional/clase.html`) y muestra que el tema de una
unidad cabe en tres horas si el trabajo previo llega hecho.

> **Nota sobre el sitio del curso.** El sitio web (`index.html` y `sesiones/`) se construyó con
> **16 sesiones**, antes de tener el calendario oficial. El calendario real da **8**. El sitio y el
> programador quedarán desalineados hasta reconciliarlos; conviene hacerlo cuando se confirme la
> franja del §2.1, para no rehacerlo dos veces.

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
- [ ] Confirmar la **franja** (sábado 8:00–11:00) y la inclusión del **sábado 8 de agosto** (§2.1).
- [ ] Aclarar las **48 horas presenciales** declaradas frente a las 24 reales (§2.2).
- [ ] Señalar las cinco inconsistencias del §5 para la próxima actualización del contenido programático.

**Del docente**
- [ ] Definir los **tres productos de evaluación** y fijar sus fechas de entrega dentro de cada corte.
- [ ] Decidir qué se dicta y qué pasa a lectura previa en cada unidad comprimida (§4).
- [ ] Reconciliar el sitio (16 → 8 sesiones) una vez confirmada la franja.
