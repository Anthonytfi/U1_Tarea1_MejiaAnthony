class EspeModal extends HTMLElement {
    static get observedAttributes() {
        return ['abierto'];
    }

    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });

        const template = document.createElement('template');
        template.innerHTML = `
            <style>
                .modal {
                    display: none;
                    position: fixed;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    background: rgba(0, 0, 0, 0.5);
                    padding: 20px;
                    z-index: 1000;
                }
                .content {
                    background: white;
                    padding: 20px;
                    border-radius: 10px;
                    box-shadow: 0 4px 8px rgba(0,0,0,0.2);
                }
                h2 {
                    margin: 0 0 10px;
                    color: #333;
                }
                p {
                    margin: 0 0 20px;
                    color: #666;
                }
                button {
                    padding: 8px 16px;
                    background-color: #dc3545;
                    color: white;
                    border: none;
                    border-radius: 5px;
                    cursor: pointer;
                }
                button:hover {
                    background-color: #c82333;
                }
            </style>
            <div class="modal">
                <div class="content">
                    <h2><slot name="titulo">Título por defecto</slot></h2>
                    <p><slot name="contenido">Contenido por defecto</slot></p>
                    <button id="cerrar">Cerrar</button>
                </div>
            </div>
        `;

        shadow.appendChild(template.content.cloneNode(true));

        this._modal = shadow.querySelector('.modal');

        shadow.querySelector('#cerrar').addEventListener('click', () => {
            this.removeAttribute('abierto');
            this.dispatchEvent(new CustomEvent('cerrar-modal', { bubbles: true, composed: true }));
        });
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'abierto') {
            this._modal.style.display = newValue !== null ? 'block' : 'none';
        }
    }
}

customElements.define('espe-modal', EspeModal);

export { EspeModal };