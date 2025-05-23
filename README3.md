Tarea 3: Desarrollo de Componentes Web Modulares

Descripción General

Este proyecto corresponde a la Tarea 3 de la asignatura de Programación Integrativa, realizada el 23 de mayo de 2025. El objetivo principal fue desarrollar componentes web modulares utilizando tecnologías modernas como ES Modules, <template>, Shadow DOM, y eventos personalizados. Se implementaron dos componentes principales: <espe-formulario> y <espe-modal>, que permiten capturar datos de usuario y mostrar un modal interactivo, respectivamente. El proyecto incluye un informe técnico y diagramas de comunicación entre componentes, cumpliendo con las especificaciones establecidas.

Estructura del Proyecto

El repositorio está organizado de la siguiente manera:
   • index.html: Archivo principal que integra los componentes <espe-formulario> y <espe-modal>.
   • espe-formulario.js: Define el componente <espe-formulario> para capturar datos de usuario.
   • espe-modal.js: Define el componente <espe-modal> para mostrar un modal interactivo.
   • docs/: Carpeta que contiene la documentación adicional.
      • captura-modal.png: Captura de pantalla de la interfaz principal.
      • captura-modal-abierto.png: Captura de pantalla del modal abierto.
      • diagrama-comunicacion.png: Diagrama visual de comunicación entre componentes.

Instrucciones de Uso

Clonar o Descargar el Repositorio:

Clona el repositorio en la rama tarea3-especificaciones-avanzadas o descarga los archivos.
Ejemplo: git clone -b tarea3-especificaciones-avanzadas <URL-del-repositorio>


Abrir la Aplicación:

Abre el archivo index.html en un navegador.
Verás un formulario con campos para "Nombre" y "Correo", un botón "Enviar", y un botón "Abrir Modal".


Interactuar con la Aplicación:

Ingresa datos en los campos "Nombre" y "Correo".
Haz clic en "Abrir Modal" para mostrar el componente <espe-modal>.
Haz clic en "Cerrar" dentro del modal para ocultarlo y observar el mensaje en la consola del navegador.


Visualizar el Diagrama de Comunicación:
Si deseas ver el diagrama de comunicación en formato visual, abre docs/diagrama-comunicacion.


Detalles Técnicos
  ES Modules: Los componentes se modularizan mediante export e import, asegurando un código reutilizable.
<template>: Se utiliza para definir la estructura de los componentes de manera eficiente.
Shadow DOM y Slots: Se implementa Shadow DOM para encapsular estilos y DOM, con slots que incluyen contenido de respaldo.
Eventos Personalizados: El componente <espe-modal> emite el evento cerrar-modal para comunicar su estado a la página principal.

