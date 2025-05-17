class FormularioActualizar extends HTMLElement {
    constructor() {
        super();
        console.log("¡Componente de formulario creado!");
        this.attachShadow({ mode: 'open' });

        this.shadowRoot.innerHTML = `
            <style>
                .mi-formulario {
                    padding: 15px;
                    border: 2px solid #ddd;
                    width: 300px;
                    margin: 20px 0;
                }
                .mi-formulario input {
                    padding: 8px;
                    width: 100%;
                    margin-bottom: 10px;
                }
                .mi-formulario button {
                    background-color: #007BFF;
                    color: white;
                    padding: 8px;
                    border: none;
                }
            </style>
            <div class="mi-formulario">
                <form>
                    <input type="text" id="nombreNuevo" placeholder="Escribe un nuevo nombre">
                    <slot name="boton-enviar"><button type="button">Cambiar Nombre</button></slot>
                </form>
            </div>
        `;
    }

    connectedCallback() {
        document.addEventListener('DOMContentLoaded', () => {
            const slotBoton = this.shadowRoot.querySelector('slot[name="boton-enviar"]');
            const botonAsignado = slotBoton.assignedElements()[0] || this.shadowRoot.querySelector('slot[name="boton-enviar"] button');

            if (botonAsignado) {
                botonAsignado.addEventListener('click', () => {
                    const nombreIngresado = this.shadowRoot.querySelector('#nombreNuevo').value.trim();
                    // Validación simple: no vacío y al menos 3 caracteres
                    if (nombreIngresado === "") {
                        console.log("Error: El nombre no puede estar vacío.");
                        alert("Por favor, ingresa un nombre.");
                        return;
                    }
                    if (nombreIngresado.length < 3) {
                        console.log("Error: El nombre debe tener al menos 3 caracteres.");
                        alert("El nombre debe tener al menos 3 caracteres.");
                        return;
                    }

                    const tarjetaUsuario = document.querySelector('tarjeta-usuario');
                    if (tarjetaUsuario) {
                        const slotNombre = tarjetaUsuario.shadowRoot.querySelector('slot[name="nombre"]');
                        if (slotNombre) {
                            const elementoNombre = slotNombre.assignedElements()[0];
                            if (elementoNombre) {
                                elementoNombre.textContent = nombreIngresado;
                                console.log("¡Nombre cambiado a " + nombreIngresado + "!");
                            } else {
                                console.log("Error: No se encontró el elemento asignado al slot 'nombre'.");
                            }
                        } else {
                            console.log("Error: No se encontró el slot 'nombre' en tarjeta-usuario.");
                        }
                    } else {
                        console.log("Error: No se encontró el componente tarjeta-usuario.");
                    }
                });
            } else {
                console.log("No se encontró el botón en el slot 'boton-enviar'.");
            }
        });
    }
}

customElements.define('formulario-actualizar', FormularioActualizar);
console.log("Formulario listo para usarse");