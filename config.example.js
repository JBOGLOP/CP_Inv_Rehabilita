// ═══════════════════════════════════════════════════════════════════
//  config.example.js — PLANTILLA DE CONFIGURACIÓN
//
//  Ninguna página del curso usa secretos TODAVÍA. Este archivo documenta
//  el patrón para cuando una sesión lo necesite (por ejemplo, un examen
//  con clave de respuestas verificada en servidor).
//
//  Cuando haga falta:  cp config.example.js config.js  y rellene los valores.
//  ⚠️  config.js está en .gitignore y NUNCA debe subirse al repo público.
//
//  Distinción importante: los quiz de AUTOEVALUACIÓN que revelan la
//  respuesta al hacer clic (como el de la sesión 01) NO son secretos —son
//  formativos y su clave es visible a propósito. Lo que va en config.js es
//  la clave de un examen CALIFICADO y las URL de Apps Script.
// ═══════════════════════════════════════════════════════════════════

window.CONFIG = {
  // URL del despliegue de Google Apps Script (si una sesión recibe respuestas).
  appsScriptURL: 'https://script.google.com/macros/s/TU_ID_DE_DESPLIEGUE/exec',

  // Correo del docente para el resumen automático (mejor en el propio Apps Script).
  teacherEmail: 'TU_CORREO@ejemplo.com',

  // Examen calificado (si lo hay). La clave de respuestas debería vivir en el
  // SERVIDOR, no en el navegador. Si es inevitable en el cliente, solo aquí
  // (config.js, ignorado) y nunca en el HTML público. Rote la contraseña cada
  // semestre.
  exam: {
    teacherPass: 'CAMBIAR_CADA_SEMESTRE',
    unlockTime: '00:00',
    examDuration: 15,
  },
};
