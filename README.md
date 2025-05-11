# U1_Tarea1_MejiaAnthony

Objetivo

Esta Tarea fue creada para la asignatura de Programación Integrativa. Su propósito es desarrollar un componente web personalizado, <tarjeta-usuario>, que muestra una tarjeta de usuario con nombre y descripción, usando tecnologías modernas como Custom Elements y Shadow DOM.

Requisitos

• Un navegador moderno como Google Chrome o Mozilla Firefox.
• Un servidor local (puedes usar python -m http.server o extensiones como Live Server en VS Code).

Cómo Usar

• Descarga o clona este repositorio.
• Asegúrate de tener los archivos tarjeta-usuario.js y index.html en el mismo directorio.
• Incluye el script en tu HTML con: <script src="tarjeta-usuario.js"></script>.
• Usa el componente en tu HTML, por ejemplo:
<tarjeta-usuario tema="claro">
    <h2 slot="nombre">Anthony Mejía</h2>
    <p slot="descripcion">Estudiante de Ingeniería</p>
</tarjeta-usuario>

