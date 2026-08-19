# Instalación del motor · Investigación en CP y Rehabilitación

> Se hace **una sola vez** para las siete sesiones. Unos quince minutos.
> Después, abrir una sesión nueva es editar dos celdas de la hoja.
>
> El roster ya está listo para pegar: `PRIVADO_roster.csv` (o `PRIVADO_roster.gs`), fuera del
> repositorio por el prefijo `PRIVADO_` del `.gitignore`.

---

## 1 · Crear la hoja

Google Sheets → hoja nueva, nombre **`Investigacion_CP_Rehab_2026-II`**.
Propietario: la cuenta desde la que va a desplegar.

## 2 · Pegar el código

En la hoja: **Extensiones → Apps Script**.

1. Borrar el contenido de `Código.gs` y pegar [`Codigo.gs`](Codigo.gs) completo.
2. Icono ⚙️ **Configuración del proyecto** → marcar *«Mostrar el archivo de manifiesto
   `appsscript.json`»*.
3. Abrir `appsscript.json` y pegar [el de esta carpeta](appsscript.json).
4. Guardar (Ctrl+S).

## 3 · Ejecutar `inicializar()`

Seleccionar `inicializar` en el desplegable de funciones → **Ejecutar**.
Google pedirá autorización la primera vez: es normal, el script escribe en su propia hoja.

Crea las pestañas `Roster`, `Config` y `Eventos`, genera **siete tokens de escritura** y un
**token de lectura** (`DASH_TOKEN`). El registro de ejecución los muestra.

> Es idempotente: se puede volver a ejecutar sin miedo. **No regenera los tokens** si ya existen.

## 4 · Rellenar el roster

Pestaña **`Roster`**, una fila por estudiante:

| Correo | Nombre | Codigo | Seudonimo | Activo |
|---|---|---|---|---|
| `…@uan.edu.co` | Apellidos Nombres | documento | A, B, C… | Sí |

- **`Correo` es la identidad.** Quien no esté aquí no puede entregar. El código no lo usa el
  motor: está para cuadrar con las actas de la maestría.
- **`Seudonimo`** es la letra con la que la persona sale proyectada en clase. Si se deja vacío,
  `asignarSeudonimos()` lo rellena (barajando, no en orden alfabético).
- Para dar de baja a alguien sin borrar su historial: `Activo` = `No`. **No borre filas.**

> **Para 2026-II ya está preparado.** El grupo son 7 estudiantes. Usa **`PRIVADO_roster.tsv`**
> (no el `.csv`): sus columnas ya están en el orden de la hoja —Correo · Nombre · Codigo ·
> Seudonimo(vacío) · Activo=Sí— y está separado por tabuladores, así que al pegarlo en la celda
> **A2** Google Sheets lo reparte solo en columnas. El seudónimo va vacío a propósito: lo asigna
> `asignarSeudonimos()` en el paso siguiente.
>
> (El `PRIVADO_roster.csv` tiene otro orden de columnas y es para el Apps Script del roster, no
> para pegar directo en esta hoja.)

> ⚠️ **Las letras no siguen el alfabeto, y es deliberado.** Si «A» fuera el primer apellido del
> curso, cualquiera del grupo desharía el anonimato ordenando la lista de clase.

> 🔴 **Esta pestaña no sale de la hoja jamás.** Son datos personales (Ley 1581 de 2012).
> Nunca al repositorio, nunca a un CSV compartido, nunca al cliente.

## 5 · Abrir la sesión 1

Pestaña **`Config`**, fila `S01`:

| Columna | Valor |
|---|---|
| `Apertura` | `2026-08-15 12:00` |
| `Cierre` | `2026-08-21 13:00` — una hora antes de clase (la sesión es a las 2:00 p. m.) |
| `Activa` | `Sí` |

Las fechas van como fecha y hora reales, no como texto.
**Copie el `Token` de esa fila**: hay que pegarlo en el HTML del entregable (paso 7).

> Si prefiere más tiempo para leer las entregas antes de clase, adelante el `Cierre` (por ejemplo,
> el jueves por la noche). El texto «Cierra el…» de la página se cambia en `CIERRE_LEGIBLE`.

## 6 · Desplegar

**Implementar → Nueva implementación** → tipo **Aplicación web**:

| Campo | Valor |
|---|---|
| Ejecutar como | **Yo** |
| Quién tiene acceso | **Cualquier usuario** |

⚠️ **«Cualquier usuario»**, no «Cualquier usuario con una cuenta de Google»: lo segundo obliga a
iniciar sesión y deja fuera a quien entre desde un equipo compartido.

Copiar la URL `/exec`.

> **Compruébelo desde una ventana de incógnito.** Si redirige a `accounts.google.com`, el acceso
> quedó mal y los estudiantes no van a poder entregar. Editar `appsscript.json` **no** cambia un
> despliegue ya creado: hay que crear uno nuevo.

Prueba rápida: abrir `…/exec` en el navegador. Debe responder
`{"ok":true,"servicio":"Motor de Investigación en CP y Rehabilitación"…}`.

## 7 · Conectar el entregable

En `sesiones/s01-declinacion-funcional/preparacion.html`, al final, hay un bloque `CONFIG`.
Rellenar:

```js
ENDPOINT: 'https://script.google.com/macros/s/…/exec',
TOKEN:    'S01_INV_REHAB_2026II_xxxxxx',
```

Los dos son **públicos por diseño**: viajan dentro de una página pública. El token solo enruta
—dice a qué sesión pertenece la entrega— y no abre nada. Quien no esté en el roster no entra
aunque los tenga.

## 8 · Conectar el tablero

El tablero **sí** lleva un secreto: el `DASH_TOKEN`, que lee todas las entregas.

```bash
cp config.example.js config.js     # config.js está en .gitignore
```

y rellenar `dashToken` y `appsScriptURL` **en `config.js`**. Abrir `_shared/tablero.html` con doble clic.

> 🔴 **`.example` = plantilla con marcadores; `config.js` = valores reales.** El `DASH_TOKEN` va en
> `config.js`, nunca en `config.example.js` (que sí se versiona). `verificar.js` bloquea la
> publicación si detecta un token real en la plantilla.
>
> Si alguna vez se empuja de verdad, no basta con borrarlo del archivo: queda en el historial de
> git. Hay que **rotar el token** ese mismo día (Propiedades del script → `DASH_TOKEN`).
>
> El tablero abre sin `config.js`: pide el token por teclado y no lo guarda. Sirve para el aula.

---

## Después: abrir cada sesión siguiente

Sin tocar el código ni volver a desplegar:

1. `Config` → fila de la sesión → poner `Apertura`, `Cierre` y `Activa = Sí`.
2. Copiar el `Token` de esa fila al `preparacion.html` de la sesión.
3. Publicar la página.

## Si cambia `Codigo.gs`

**Implementar → Gestionar implementaciones → ✏️ → Versión: Nueva versión.**
La URL `/exec` no cambia. Si en vez de eso crea una implementación nueva, la URL sí cambia y hay
que actualizar todos los HTML.

---

## Comprobaciones antes de la primera clase

- [ ] `…/exec` responde el JSON de servicio desde **incógnito**
- [ ] `…/exec?action=estado&token=<token S01>` dice `"abierta": true`
- [ ] Una entrega de prueba con un correo **que no está** en el roster → `correo_no_reconocido`
- [ ] Una entrega de prueba con un correo **que sí está** → aparece en `S01_Respuestas`
- [ ] Reenviar la misma → **actualiza la fila**, no crea otra, y sube `Version`
- [ ] El tablero la muestra, y el **modo proyección** oculta nombre y correo
- [ ] **Borrar la fila de prueba** de `S01_Respuestas` y su rastro en `Eventos`
- [ ] La zona horaria de la hoja es `America/Bogota`

## Errores que devuelve el servidor

| Código | Qué pasó |
|---|---|
| `token_invalido` | El token del HTML no está en `Config` |
| `sesion_cerrada` | `Activa` ≠ `Sí` |
| `aun_no_abre` / `plazo_vencido` | Fuera de la ventana `Apertura`–`Cierre` |
| `correo_no_reconocido` | No está en `Roster`, o tiene `Activo = No` |
| `sin_respuestas` | Llegó el envío vacío |
| `no_autorizado` | `DASH_TOKEN` incorrecto en el tablero |
| `ocupado` | Dos entregas simultáneas; el cliente reintenta |
