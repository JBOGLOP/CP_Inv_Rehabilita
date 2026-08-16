# HANDOFF — Aula invertida: el método y el motor

> **Documento portátil.** Explica cómo se está trabajando en el *Seminario de fundamentación en
> cuidados paliativos* (32264001) y cómo traer aquí ese método: **aula invertida con entregable
> previo individual, backend propio y tablero de conducción de clase**.
>
> Está escrito para quien —persona o agente— tenga que avanzar en **Investigación en Cuidados
> Paliativos y Rehabilitación** (37543013). No sustituye a [`HANDOFF.md`](HANDOFF.md), que sigue
> siendo el punto de entrada del proyecto: lo complementa con la parte pedagógica y técnica que
> aquí todavía no existe.
>
> Consolidado el **16 de agosto de 2026**, con el motor del Seminario ya instalado y verificado.

---

## 0 · Dos cosas que hay que mirar antes de construir nada

### 0.1 · 🟢 RESUELTO — el sitio ya son 7 sesiones

**Estaba así:** el manifiesto declaraba 16 sesiones (jueves desde el 6 de agosto) mientras el
programador decía 7 (viernes 2-5 pm). Nueve fichas correspondían a encuentros que no existen.

**Resuelto el 16 de agosto de 2026.** El manifiesto `sesiones/_sesiones.json`, la portada y las
fichas se reconciliaron a **7 sesiones**, sincronizadas con el programador: una unidad por sesión
más el integrador, los viernes reales. Las carpetas están por contenido, así que el cambio no
renombró ninguna ruta. `node scripts/verificar.js` cruza portada ↔ manifiesto y da 7 = 7.

> Ya se puede escribir el entregable con el tamaño correcto: **7 sesiones**, ≈ 13,7 h de trabajo
> independiente por sesión (ver §5.1), lo que admite las cinco preguntas del modelo del Seminario.

### 0.2 · El grupo de aquí **no** es el del Seminario

Comprobado el 16 de agosto cruzando los dos roster: **cero correos en común**. Son 7 estudiantes
aquí y 8 en el Seminario, y los planes son distintos (2377 frente a 3660).

Se dice porque la conclusión contraria es tentadora —misma maestría, mismo docente, mismos
viernes— y llevaría a repartir la carga entre las dos asignaturas como si fueran el mismo
estudiante. **No lo son.** Aquí la carga se calcula sola, sin descontar nada.

---

## 1 · Por qué el Seminario dejó la clase magistral

El contenido programático del Seminario **evalúa competencia investigativa** y no trae un solo
tema de metodología. Exponer contenido tres horas no produce esa competencia: produce apuntes.

El cambio fue este:

| Antes | Ahora |
|---|---|
| El docente expone; el estudiante escucha y quizá lee después | El estudiante lee y **escribe una posición** antes; la sesión contrasta lo escrito |
| El material de clase es el fin | El material de clase es **insumo**, y se marca «material de consulta · se lee antes» |
| La evaluación llega al final del corte | **Cada entregable previo es el seguimiento del corte**, y el producto final los integra |
| El aula produce apuntes | El aula produce **discusión sobre datos que faltan** |

**Este proyecto lo tiene más fácil que el Seminario**, y conviene verlo: el hilo de Rehabilitación
—declarado en su propio [`HANDOFF.md`](HANDOFF.md) §1— ya es exactamente el patrón que el aula
invertida necesita.

> «…preguntando, en cada trayectoria, **qué evidencia sostiene la rehabilitación paliativa, cómo
> se mide el resultado y qué falta por investigar**.»

Eso *es* una pregunta de entregable previo, repetida dieciséis —o siete— veces con distinto
sujeto. En el Seminario hubo que inventar esa capa encima del contenido histórico; aquí ya está
en el syllabus.

---

## 2 · Las tres piezas de cada sesión

```
sesiones/sNN-slug/
├── index.html        guía: qué leer, qué entregar, cómo transcurre el encuentro
├── preparacion.html  ← ENTREGABLE PREVIO individual  (esto es lo que falta aquí)
├── clase.html        el material · rotulado «material de consulta · se lee antes»
└── README.md         nota de trabajo del docente
```

Y una sola pieza para todo el curso:

```
_shared/tablero.html  ← TABLERO DOCENTE · se abre en clase y la conduce
```

**El deck que ya existe aquí no se tira.** `s01-declinacion-funcional/clase.html` tiene modo doble
(aula / estudio); el **modo estudio ya es el material previo**. Lo único que cambia es el rótulo y
el papel: deja de ser lo que se proyecta tres horas y pasa a ser lo que se lee antes. El tiempo de
aula que eso libera es el que se dedica a contrastar entregas.

---

## 3 · Lo difícil no es el código: son las preguntas

El motor se instala en quince minutos. Escribir preguntas que un magíster no pueda responder
copiando la lectura cuesta bastante más, y es donde se gana o se pierde el modelo.

### El patrón: del juicio al dato

Toda pregunta pide dos cosas, y **la segunda pesa más que la primera**:

1. Una **posición** sobre lo que pasa donde el estudiante trabaja.
2. **Qué dato convertiría esa posición en evidencia**, si ese dato existe, y quién lo tendría.

La primera parte se responde en dos líneas. La segunda es la asignatura.

### Reglas que funcionaron

- **Ninguna pregunta se responde con lo que dice la lectura.** La lectura da con qué mirar; la
  pregunta apunta al terreno propio.
- **La ausencia de datos es un hallazgo, no un fracaso.** Se pide explícitamente reportar dónde se
  buscó y qué no se encontró, y eso **puntúa igual** que el resto. Sin decirlo, el estudiante
  esconde el hueco e inventa.
- **Una fuente en inglés**, por la competencia institucional de lectura en segunda lengua. Aquí la
  Unidad 4 es entera en inglés: en esas sesiones el entregable completo puede ir en inglés.
- **Declaración de uso de IA.** Declararla suma; una cita inventada resta. Verificar lo que se cita
  *es* la competencia que se evalúa.
- **Campo «minutos dedicados».** No afecta la nota. Sirve para corregir la carga con datos en vez
  de con la intuición del docente, que siempre subestima.

### Qué NO preguntar

«Resuma», «explique», «mencione tres», «¿en qué año…?». Todo lo que se responde con Ctrl+F sobre
la lectura. Si la respuesta correcta está en el material, la pregunta sobra.

### Ejemplo, traducido a esta asignatura

Del entregable de la sesión 1 del Seminario, y su equivalente aquí:

| Seminario | Rehabilitación (propuesta) |
|---|---|
| ¿Cuándo llegaron los CP a su municipio? Qué buscó, dónde, y qué **no** encontró | ¿Qué se ofrece hoy como rehabilitación en esta trayectoria en su servicio? Qué protocolo existe, y si no hay ninguno, documéntelo |
| ¿Qué definición de CP opera **de hecho** en su institución, y a quién deja fuera? | ¿Con qué criterio se decide **a quién se rehabilita** en esta trayectoria, y a quién deja fuera ese criterio? |
| Dimensión peor atendida del dolor total — **y qué dato lo demostraría** | ¿Con qué desenlace se mide el éxito aquí? ¿Se registra? ¿Y qué diferencia habría con medir función frente a medir supervivencia? |
| Un indicador del *Global Atlas*: qué mide y qué deja invisible | Un desenlace de la lectura (p. ej. cambio mínimo clínicamente importante): qué captura y qué deja invisible |
| Convierta una afirmación de la lectura en pregunta investigable | Ídem, sobre la evidencia de la trayectoria de la sesión |

La cuarta y la quinta se transfieren casi literalmente. La tercera es la más potente aquí, porque
**la medición de resultado es el punto débil declarado de la rehabilitación paliativa**: el hueco
que el estudiante encuentre es material real de investigación.

---

## 4 · El motor

Un solo proyecto de Apps Script para todas las sesiones. Una hoja, una pestaña de respuestas por
sesión, un token de escritura por sesión.

### Archivos a copiar del Seminario

| Del Seminario | A este proyecto | Cambios |
|---|---|---|
| `scripts/apps-script/Codigo.gs` | igual | Los ids de sesión en `inicializar()` |
| `scripts/apps-script/appsscript.json` | igual | ninguno |
| `scripts/apps-script/INSTALACION.md` | igual | nombre de la hoja |
| `sesiones/s01-*/preparacion.html` | plantilla de entregable | tokens de color, preguntas, token de sesión |
| `_shared/tablero.html` | igual | la constante `TITULOS` y la lista de sesiones del `<select>` |
| `config.example.js` | igual | ninguno |

Ruta del original:
`G:\Mi unidad\1. UNIVERSIDADES\2026 Maestría\5. Seminario de fundamentación en cuidados paliativos\`
· repositorio público: `github.com/JBOGLOP/seminario_fundamentacion_cp`

### Cómo está construido, y por qué

**`Codigo.gs` vive en el repositorio público, y es deliberado: no contiene ni un secreto.** El
token de lectura está en las Propiedades del script; los de escritura y las fechas, en la pestaña
`Config` de la hoja. Abrir una sesión es editar dos celdas, no tocar código ni redesplegar.

**Identidad sin exponer la lista.** El estudiante escribe su correo institucional y **el servidor
lo valida** contra la pestaña `Roster`. El navegador nunca recibe la lista. La alternativa cómoda
—mandar el roster para pintar un selector— dejaría los nombres expuestos todos los días que el
entregable está abierto.

> Aquí ya existe `PRIVADO_roster.gs` con `estudiantePorCorreo_()` y compañía, del lado del
> servidor y fuera de git. **Es la mitad del trabajo hecho y con el criterio correcto.** Encaja
> directamente: `leerRoster_()` del motor hace lo mismo leyendo de la hoja.

**Seudónimos.** Cada estudiante tiene una letra estable. El tablero proyecta la letra; el docente
ve la identidad en su panel.

**Reenvío con versión.** Se puede corregir y reenviar hasta el cierre; cada envío reescribe la
fila y sube `Version`. Un seminario premia volver sobre lo escrito, no acertar a la primera.

**Portabilidad y backend no se contradicen.** El entregable se lee, se responde y se guarda **sin
conexión** (borrador en `localStorage`). Solo el envío necesita red, y si no la hay, «Copiar todo»
lo deja listo para mandarlo por correo. La regla existe por quienes ejercen donde la conectividad
no se da por supuesta.

### Contrato del servidor

| Llamada | Devuelve |
|---|---|
| `GET /exec` | salud del servicio |
| `GET ?action=estado&token=<sesión>` | si la ventana está abierta · sin datos personales |
| `GET ?action=tablero&dash=<DASH_TOKEN>&sesion=SNN` | todas las entregas · **solo docente** |
| `POST` `{token, correo, nombre, minutos, declaracionIA, respuestas:{...}}` | registra o actualiza |

Errores: `token_invalido`, `sesion_cerrada`, `aun_no_abre`, `plazo_vencido`,
`correo_no_reconocido`, `sin_respuestas`, `no_autorizado`, `ocupado`.

---

## 5 · Lo que NO se transfiere tal cual

### 5.1 · La carga por sesión depende de cuántas sesiones haya

Aquí está el cálculo que hay que hacer **antes** de decidir cuántas preguntas lleva el entregable:

| | Horas de trabajo independiente | Sesiones | Disponible por sesión | Entregable de 3 h |
|---|---|---|---|---|
| Seminario | 144 | 7 | ≈ 20 h | 15 % · cómodo |
| Rehabilitación, **si son 7** | 96 | 7 | ≈ 13,7 h | 22 % · razonable |
| Rehabilitación, **si son 16** | 96 | 16 | **6 h** | **50 % · insostenible** |

Con 16 sesiones el entregable tiene que bajar a **2 o 3 preguntas, 60–90 minutos**. Con 7, caben
las cinco del modelo del Seminario. **Por eso el §0.1 bloquea:** no es un detalle administrativo,
decide el diseño del instrumento.

Y una regla de oro: **si el entregable no se puede hacer en el tiempo declarado, deja de
entregarse a la tercera semana**, y con él se cae el modelo entero — porque sin entregas no hay
clase que conducir.

### 5.2 · El anonimato depende del tamaño del grupo

Con 7 u 8 personas que escriben cada una sobre su propio servicio, **la primera pregunta las
identifica casi sola**. Lo que el tablero garantiza es que *no se proyecta el nombre*, no que
nadie sepa quién escribió.

Dígalo así en el encuadre. No prometa anonimato real: baja la exposición, que ya es bastante, y
prometer de más se nota a la primera sesión.

### 5.3 · La paleta

El motor es agnóstico: todo sale de `_shared/tokens.css` copiado en línea. Aquí la paleta es
**fría —azules y grises—** por decisión del docente, y así debe seguir. Copie la lógica, no los
hex.

### 5.4 · El inglés

En el Seminario es **una pregunta** con fuente en inglés. Aquí la **Unidad 4 entera** va en
inglés: en esas sesiones el entregable completo puede pedirse en inglés, y conviene avisarlo con
antelación en la ficha, no el día de la apertura.

---

## 6 · Ruta de adopción

Por orden, y sin saltarse el primero:

1. **Resolver 16 vs. 7** (§0.1). Editar `sesiones/_sesiones.json`, regenerar con
   `node scripts/nueva-sesion.js`, actualizar la portada. Las carpetas están nombradas por
   contenido, así que **cambiar el calendario no renombra ninguna ruta** — ese acierto ya está
   hecho.
2. **Instalar el motor.** Copiar los archivos del §4, crear la hoja, ejecutar `inicializar()`,
   pegar el roster, desplegar. Quince minutos. Está todo en `INSTALACION.md`.
3. **Convertir la sesión 01.** Ya tiene deck; solo hay que: rotular `clase.html` como material de
   consulta, escribir `preparacion.html` con 3–5 preguntas según §5.1, y reescribir el guion de
   `index.html` para que las tres horas sean contraste, no exposición.
4. **Probar de extremo a extremo** con un correo que **no** esté en el roster (debe rechazarlo) y
   con uno que sí (debe registrar, y el reenvío debe actualizar sin duplicar). Borrar las filas de
   prueba.
5. **Correo de bienvenida.** Hay uno redactado en el Seminario, en
   `docs/CORREO-BIENVENIDA.md`: dedica la mitad a explicar que no habrá clase magistral, porque es
   lo único que el estudiante no puede deducir solo y de lo que depende que la primera sesión
   tenga con qué trabajar. **En CCO, nunca en «Para».**
6. **Las demás sesiones**, clonando la 01.

---

## 7 · Reglas innegociables (comunes a las dos asignaturas)

1. **Portabilidad sin conexión.** Cada HTML abre con doble clic, sin servidor y sin internet.
   Tokens copiados en línea; cero recursos externos. Los `<a href>` sí se conservan: son enlaces,
   no recursos que se carguen.
2. **Sin datos de estudiantes en el repositorio.** Es público e indexable. Prefijo `PRIVADO_` para
   lo que nunca sale del disco. Al repositorio se copia **archivo por archivo**, nunca carpetas
   enteras.
3. **No se designa a nadie por su pronóstico.** «persona con enfermedad avanzada», no «paciente
   terminal». Excepción: citas literales de normas y sentencias.
4. **Material de terceros: se cita, no se reproduce.** APA 7 con DOI.
5. **Los secretos nunca en el HTML** ni en `config.example.js`: van en `config.js`, ignorado.

Y antes de cada commit: `node scripts/verificar.js`. Lo que no comprueba —que la página se vea
bien— se comprueba **abriéndola con el wifi apagado**, a 375 px y navegando con el teclado.

---

## 8 · Lo que costó caro (aprovéchelo)

Cada punto salió de un error real de las últimas semanas. Están arreglados en el Seminario; si
copia el código, ya vienen corregidos. Si lo reescribe, tropezará con los mismos.

| # | Qué pasó | Lección |
|---|---|---|
| 1 | `asignarSeudonimos()` repartía las letras **en orden de fila**, y el roster está alfabético: «A» era el primer apellido del curso. Cualquiera del grupo deshacía el anonimato ordenando la lista | **Barajar antes de asignar.** Un anonimato que se descifra ordenando apellidos no es anonimato |
| 2 | El `DASH_TOKEN` acabó en `config.example.js` —que **sí** se versiona— en vez de en `config.js`. Se salvó por no haber hecho commit todavía | `.example` = plantilla con marcadores · `config.js` = valores reales. El verificador ahora lo bloquea |
| 3 | Con la sesión activa pero **antes** de la hora de apertura, el entregable decía «Fuera de plazo» — el mensaje contrario al correcto | Distinguir *aún no abre* de *ya cerró*. Un mensaje equivocado genera diez correos |
| 4 | El verificador marcaba como correo real el `placeholder` de un formulario | **Afinar el detector, no romper el formulario.** Un detector que grita siempre enseña a ignorarlo |
| 5 | El verificador recorre **todo** el árbol, también lo ignorado por git, y bloqueaba por el propio roster privado | Omitir `PRIVADO_*` **pero listarlo en pantalla**. Un verificador que calla lo que no mira engaña |
| 6 | Apareció un `.git/HEAD.lock` obsoleto de 0 bytes, sin proceso git activo | Es la sincronización de Drive. Comprobar que no hay git corriendo y retirarlo; `git fsck` después |
| 7 | Las comillas invertidas de un mensaje de commit las interpretó bash | `git commit -F -` con heredoc `<<'EOF'`, nunca `-m "…\`…\`"` |

Y las tres heredadas de los cursos de 2026-I, que siguen valiendo:

- **Audite antes de planificar.** Cuando el plan escrito choque con el disco, gana el disco.
  (§0.1 de este documento es exactamente eso.)
- **El sufijo del archivo miente.** `_v2`, `_final`, `_merged`: fíese de la fecha y del hash.
- **Rotule lo que no pueda verificar.** Dos cifras distintas bajo la misma etiqueta no se
  resuelven inventando: se marcan `[DATO POR VERIFICAR]`, visibles en la página.

---

## 9 · Estado honesto de lo que se copia

**El motor está instalado, desplegado y verificado de extremo a extremo — técnicamente.**
Comprobado el 16 de agosto: el endpoint responde sin sesión de Google, el token de sesión es
reconocido, el roster de 8 carga, el `DASH_TOKEN` autoriza la lectura del tablero y la zona
horaria es Bogotá.

**Pero ningún estudiante ha entregado todavía.** La primera sesión del Seminario es el **21 de
agosto**. Lo que está probado es la máquina, no la pedagogía: no se sabe aún cuántos entregan a
tiempo, si tres horas era la estimación correcta, ni si el tablero aguanta la conducción de una
clase real.

Trátelo como lo que es: **una arquitectura verificada y un modelo pedagógico sin estrenar.** Si
va a construir aquí antes del 21 de agosto, copie el código con confianza y las decisiones
pedagógicas con reserva. Si puede esperar a después del 21, pregunte primero cómo fue — habrá
datos.

---

## 10 · Comprobaciones antes de la primera sesión

- [ ] **Resuelto 16 vs. 7**, y el manifiesto, la portada y el programador dicen lo mismo
- [ ] `…/exec` responde el JSON de servicio **desde una ventana de incógnito**
- [ ] `…/exec?action=estado&token=<S01>` dice `"abierta": true` dentro de la ventana
- [ ] Entrega de prueba con correo **fuera** del roster → `correo_no_reconocido`
- [ ] Entrega de prueba con correo **del** roster → aparece en `SNN_Respuestas`
- [ ] Reenvío → **actualiza la fila**, no crea otra, y sube `Version`
- [ ] El tablero la muestra y el **modo proyección** oculta nombre y correo
- [ ] Filas de prueba **borradas**, también en `Eventos`
- [ ] Zona horaria de la hoja = `America/Bogota`
- [ ] `config.js` creado y **`git check-ignore -v config.js`** lo confirma
- [ ] `config.example.js` conserva sus **marcadores**, no valores reales
- [ ] `node scripts/verificar.js` en verde
- [ ] La página abierta **con el wifi apagado**, legible a 375 px

---

*Documento portátil, sin datos personales ni tokens. Si lo mueve a otra asignatura, actualice
§0, §5 y §9: el resto vale igual.*
