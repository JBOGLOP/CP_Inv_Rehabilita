# -*- coding: utf-8 -*-
"""Renombra las carpetas de `clases/` con las fechas reales del calendario.

Uso (desde la raíz del proyecto):

    python herramientas/renombrar_clases.py            # muestra qué haría (simulación)
    python herramientas/renombrar_clases.py --aplicar  # ejecuta los cambios

Lee la tabla de sesiones de `docs/calendario.md`. Para cambiar las fechas, edita esa tabla
(columnas «Sesión» y «Fecha») y vuelve a ejecutar el script.

El script:
  1. renombra cada carpeta `AAAA-MM-DD_SNN_UX_slug` con la fecha nueva (usa `git mv` si el
     proyecto es un repositorio Git, y `os.rename` en caso contrario);
  2. actualiza la línea «**Fecha**» del `README.md` de cada sesión.
"""
import os
import re
import subprocess
import sys
import datetime

RAIZ = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CLASES = os.path.join(RAIZ, "clases")
CALENDARIO = os.path.join(RAIZ, "docs", "calendario.md")

DIAS = ["lunes", "martes", "miércoles", "jueves", "viernes", "sábado", "domingo"]
MESES = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio",
         "agosto", "septiembre", "octubre", "noviembre", "diciembre"]

FILA = re.compile(r"^\|\s*S(\d{2})\s*\|\s*(\d{4}-\d{2}-\d{2})\s*\|")
CARPETA = re.compile(r"^(\d{4}-\d{2}-\d{2})_S(\d{2})_(U\d)_(.+)$")


def fecha_larga(d):
    return "%s %d de %s de %d" % (DIAS[d.weekday()], d.day, MESES[d.month - 1], d.year)


def leer_calendario():
    """Devuelve {numero_sesion: date} a partir de la tabla de docs/calendario.md."""
    fechas = {}
    with open(CALENDARIO, encoding="utf-8") as f:
        for linea in f:
            m = FILA.match(linea.strip())
            if m:
                fechas[int(m.group(1))] = datetime.date(*map(int, m.group(2).split("-")))
    return fechas


def es_repo_git():
    return os.path.isdir(os.path.join(RAIZ, ".git"))


def mover(origen, destino, aplicar):
    if not aplicar:
        return
    if es_repo_git():
        subprocess.check_call(["git", "-C", RAIZ, "mv", origen, destino])
    else:
        os.rename(os.path.join(RAIZ, origen), os.path.join(RAIZ, destino))


def actualizar_readme(carpeta_abs, fecha, aplicar):
    readme = os.path.join(carpeta_abs, "README.md")
    if not os.path.isfile(readme):
        return False
    with open(readme, encoding="utf-8") as f:
        texto = f.read()
    nuevo = re.sub(
        r"(\|\s*\*\*Fecha\*\*\s*\|\s*)[^|]*(\|)",
        lambda m: "%s%s *(provisional — ver [calendario](../../docs/calendario.md))* %s"
                  % (m.group(1), fecha_larga(fecha), m.group(2)),
        texto, count=1)
    if nuevo == texto:
        return False
    if aplicar:
        with open(readme, "w", encoding="utf-8", newline="\n") as f:
            f.write(nuevo)
    return True


def main():
    aplicar = "--aplicar" in sys.argv
    if not os.path.isdir(CLASES):
        sys.exit("No se encontró la carpeta 'clases/'. Ejecuta el script desde el proyecto.")

    fechas = leer_calendario()
    if not fechas:
        sys.exit("No se pudo leer ninguna fila de sesiones en docs/calendario.md.")

    cambios = 0
    for nombre in sorted(os.listdir(CLASES)):
        ruta = os.path.join(CLASES, nombre)
        if not os.path.isdir(ruta):
            continue
        m = CARPETA.match(nombre)
        if not m:
            print("  (se omite, no coincide con el patrón): %s" % nombre)
            continue
        fecha_actual, num, unidad, slug = m.group(1), int(m.group(2)), m.group(3), m.group(4)
        if num not in fechas:
            print("  (sin fila en el calendario): S%02d" % num)
            continue
        nueva = fechas[num]
        destino_nombre = "%s_S%02d_%s_%s" % (nueva.isoformat(), num, unidad, slug)

        if destino_nombre != nombre:
            print("  %s\n    -> %s" % (nombre, destino_nombre))
            mover("clases/" + nombre, "clases/" + destino_nombre, aplicar)
            cambios += 1
            ruta = os.path.join(CLASES, destino_nombre) if aplicar else ruta

        if actualizar_readme(ruta, nueva, aplicar):
            print("  README de S%02d actualizado a: %s" % (num, fecha_larga(nueva)))
            cambios += 1

    if not aplicar:
        print("\nSimulación: %d cambio(s) pendiente(s). "
              "Ejecuta con --aplicar para hacerlos efectivos." % cambios)
    else:
        print("\nListo: %d cambio(s) aplicado(s)." % cambios)


if __name__ == "__main__":
    main()
