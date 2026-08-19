# Conducir la sesión con el tablero

> Cómo se abre, qué hace cada botón y —lo que más importa— **cómo se lleva la clase** para que
> tres horas de contrastar textos no se vuelvan tres horas de leer textos en voz alta.
>
> Sirve para las siete sesiones. La parte de conducción es una propuesta razonada, escrita antes
> de la primera sesión (21 de agosto): conviene revisarla con lo que pase ese día.

---

## 1 · Dónde está y cómo se abre

**`_shared/tablero.html`**, en la carpeta del proyecto.

### En clase: ábrelo como archivo local

Doble clic sobre el archivo en:

```
G:\Mi unidad\1. UNIVERSIDADES\2026 Maestría\4. Investigacion CP y Rehabilitacion\_shared\tablero.html
```

Así carga `config.js` solo y **no hay que teclear ningún token delante del salón**. Es la forma
recomendada.

> El servidor de Apps Script responde `Access-Control-Allow-Origin: *`, así que el tablero lee las
> entregas aunque se abra desde el disco, sin servidor local.

### Desde otro equipo

```
https://jboglop.github.io/CP_Inv_Rehabilita/_shared/tablero.html
```

El sitio publicado **no lleva `config.js`** —está en `.gitignore`— así que pide la URL del
despliegue y el `DASH_TOKEN` por teclado, y no los guarda. Sirve para un apuro; para la clase es
peor, porque teclear el token con el proyector encendido lo expone.

Para abrir directo en una sesión: `…/tablero.html?sesion=S03`.

---

## 2 · Los controles

| Control | Qué hace |
|---|---|
| **Selector de sesión** | Cambia entre S01 y S07 |
| **Contador** | `entregas / inscritos`. Lo primero que hay que mirar al abrir |
| **Recargar** | Vuelve a leer. Útil si alguien entrega sobre la hora |
| **A− / A+** | Tamaño de letra. Súbelo hasta que se lea **desde la última fila** |
| **Modo proyección** | 🔴 Oculta nombres, correos, pie de tarjeta y el panel de faltantes |
| **← →** | Cambian de pregunta sin tocar el ratón |
| **«marcar»** | Atenúa la tarjeta ya discutida. Se ve de un vistazo qué falta |

Las marcas viven solo en ese navegador: son el rastro de por dónde va la clase, no un dato del
curso. Se borran sin consecuencia.

### 🔴 Antes de compartir pantalla

**Enciende el modo proyección y compruébalo.** El botón queda resaltado y dice «Proyección
ACTIVA». Si no lo haces, proyectas nombres y correos de todo el grupo. Hazlo **antes** de conectar
el proyector, no después.

### Cómo sabes quién es quién con la proyección encendida

En modo proyección tú tampoco ves los nombres. La salida fiable: ten a mano la correspondencia
**letra → apellido**. Está en la pestaña `Roster` de la hoja (columnas `Seudonimo` y `Nombre`):
ordénala por `Seudonimo` e imprímela, o tenla en otra ventana. Siete letras, siete apellidos.

---

## 3 · Cómo conducir · lo que hace que funcione

### La regla que lo decide todo: no leas las respuestas en voz alta

Leer siete respuestas seguidas mata la sesión. El grupo desconecta en la tercera.

**Lo que sí funciona:**

1. **Proyecta la pregunta** y deja **dos minutos de lectura en silencio**. Todos leen las siete
   respuestas a la vez. Nadie recita.
2. **Devuélvele el análisis al grupo**, no la conclusión:
   - *«¿Qué se repite en varias?»*
   - *«¿Qué dice solo una persona?»*
   - *«¿Dónde se contradicen dos?»*
3. **Solo entonces** entras tú, para nombrar lo que el grupo ya vio y ponerle el concepto.

El trabajo intelectual lo hace el grupo. Tú ordenas.

### Empieza por donde haya más contraste, no por la P1

Mira las entregas **antes** de la clase y elige con cuál abrir. La mejor primera pregunta es
aquella donde dos personas dicen cosas incompatibles: la discusión arranca sola.

### Los huecos son el mejor material de este curso

Si varias personas dicen que en su servicio **no hay un protocolo de rehabilitación**, o que
**no se mide** el resultado, proyéctalas juntas y cuéntalas en voz alta. Eso no es un problema de
las entregas: es el hallazgo, y es exactamente el hilo del curso —qué evidencia sostiene rehabilitar
y cómo se mide— apareciendo en el terreno del grupo.

**La pregunta 3 (función frente a supervivencia) es la que más rinde.** La brecha entre lo que se
hace y lo que se mide es material real de investigación, no un tropiezo. No la trates como una falla.

### La letra invita, no obliga

Di *«A dice que…»*. Quien escribió puede reconocerse si quiere, y muchas veces lo hace solo.
**Nunca preguntes «¿quién es A?»** — rompe justo lo que el anonimato compra. Y recuerda la salvedad
honesta del encuadre: con siete personas que escriben cada una sobre su servicio, se van a
reconocer entre ellas; lo que el tablero garantiza es que el nombre no va a la pantalla.

### Cierra cada bloque con una síntesis escrita y visible

Al terminar cada pregunta, escribe en el tablero físico —o en un documento proyectado— **una frase**
con lo que quedó. Al final de las tres horas hay cinco frases que el grupo construyó. Eso es «la
clase que se va construyendo»: se tiene que poder señalar al final.

### Cinco minutos de cierre, siempre

Qué quedó abierto, qué se lleva a la sesión siguiente. Sin eso, la sesión termina cuando se acaba
la hora, que no es lo mismo que terminar.

---

## 4 · Preparar el guion la noche antes

```bash
node scripts/resumir-entregas.js --sesion S01
```

Baja las entregas, pide a **Ollama en local** una síntesis y una cita por respuesta, y escribe
`PRIVADO_guion-S01.md` — fuera del repositorio por el prefijo. Con siete estudiantes × cinco
preguntas y `qwen2.5:7b`, unos **dos o tres minutos**.

Por cada respuesta deja: **síntesis** de una frase, **datos** extraídos (cifras, desenlaces,
instrumentos, servicios) y una **cita literal**, más la respuesta completa plegada en un
desplegable. Y antes de cada pregunta, las mismas señales del tablero.

Requisitos: tener **Ollama** instalado y el modelo descargado (`ollama pull qwen2.5:7b`).
Opciones: `--modelo llama3.1:8b` para cambiar de modelo, `--sin-ia` para generar solo las señales y
los textos, sin llamar a Ollama.

### Las citas se verifican, no se creen

Todo lo que el modelo devuelve como cita **se busca en el texto original**. Si no aparece —aunque
sea por una palabra— se descarta y el guion lo dice. Y cuando sí aparece, se copia el fragmento
**del original**, no el que escribió el modelo: lo que se proyecta son las palabras de la persona,
con sus tildes y su puntuación. (Probado: recupera la cita con su grafía real y descarta la
inventada.)

### 🔴 Es un borrador para preparar, no material de clase

Las síntesis son de la máquina. **Léelas y corrígelas antes de usar nada.** En un curso que evalúa
verificar lo que se cita, proyectar una paráfrasis automática de lo que escribió un estudiante sería
contradecir el curso con la herramienta del curso.

Lo que sí puedes proyectar sin reservas son **las citas verificadas**: son palabras del estudiante,
no de un modelo.

### Protección de datos

Ollama corre en tu equipo: **las respuestas no salen de ahí.** Eso encaja con lo que se les declaró
—«no se publican ni se comparten con terceros»—. Mandarlas a una API en la nube no estaría cubierto
por esa declaración y habría que avisarles antes.

Un detalle técnico: el **403 de Ollama** que aparece al llamarlo desde una página abierta como
archivo solo afecta al navegador. Este script corre en Node, no manda cabecera `Origin`, y por eso
**no hay que configurar `OLLAMA_ORIGINS`**.

---

## 5 · Plan B: si llegan pocas entregas

Puede pasar, sobre todo en la primera. **Decídelo la noche antes, no a las 2:05.**

| Entregas | Qué hacer |
|---|---|
| **5 o más de 7** | El guion funciona tal cual |
| **3 a 4** | Funciona, pero con menos material por pregunta. Junta P1+P2 en un solo bloque y da más aire a cada discusión |
| **Menos de 3** | Cambia el plan: **la primera hora se trabaja en el aula.** Se responden P1 y P3 ahí mismo, en papel o en el portátil, y se ponen en común. La sesión se salva y el mensaje queda claro sin necesidad de decirlo |

En el tercer caso, no reproches la falta de entregas al empezar. Trabájalo y, al cerrar, di qué se
perdió la sesión por no tener el material antes. Se entiende mejor así que con un llamado de atención.

---

## 6 · Lista de comprobación · diez minutos antes

- [ ] Tablero abierto **desde el archivo local**, con la sesión correcta seleccionada
- [ ] El contador muestra las entregas esperadas
- [ ] **Modo proyección ACTIVO**, comprobado en pantalla
- [ ] Tamaño de letra subido y legible **desde la última fila**
- [ ] La tabla letra → apellido a mano (pestaña `Roster`, otra ventana o impresa)
- [ ] Decidido con qué pregunta abres
- [ ] Las respuestas leídas por ti antes de entrar
- [ ] Si corriste `resumir-entregas.js`, el guion **leído y corregido**
