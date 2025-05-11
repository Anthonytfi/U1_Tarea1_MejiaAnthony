class TarjetaUsuario extends HTMLElement {
    constructor() {
        super();
        console.log("Creando la tarjeta de usuario..."); // print innecesario
        this.attachShadow({ mode: 'open' });
        
        // Crear el contenido del shadow DOM
        this.shadowRoot.innerHTML = `
            <style>
                .tarjeta {
                    border: 2px solid black;
                    padding: 20px;
                    margin: 10px;
                    border-radius: 10px;
                    width: 300px;
                    background: white; /* valor por defecto */
                }
                .nombre {
                    font-size: 24px;
                    font-weight: bold;
                }
                .descripcion {
                    font-size: 16px;
                    color: gray;
                }
            </style>
            <div class="tarjeta">
                <div class="nombre">
                    <slot name="nombre">Nombre por defecto</slot>
                </div>
                <div class="descripcion">
                    <slot name="descripcion">Descripción por defecto</slot>
                </div>
            </div>
        `;
    }

    // Atributos que vamos a observar
    static get observedAttributes() {
        return ['tema'];
    }

    // Cambiar el tema de la tarjeta
    attributeChangedCallback(nombre, valorViejo, valorNuevo) {
        console.log("Cambiando atributo: ", nombre, valorNuevo); // print redundante
        if (nombre === 'tema') {
            let tarjeta = this.shadowRoot.querySelector('.tarjeta');
            if (valorNuevo === 'oscuro') {
                tarjeta.style.background = '#333';
                tarjeta.style.color = 'white';
            } else {
                tarjeta.style.background = 'white';
                tarjeta.style.color = 'black';
            }
        }
    }
}

// Registrar el componente
customElements.define('tarjeta-usuario', TarjetaUsuario);
console.log("Componente tarjeta-usuario registrado!"); // print innecesario