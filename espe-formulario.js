class EspeFormulario extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        
        const template = document.createElement('template');
        template.innerHTML = `
            <style>
                form {
                    display: flex;
                    flex-direction: column;
                    gap: 10px;
                    padding: 20px;
                    border-radius: 10px;
                }
                button {
                    padding: 10px;
                    background-color: #28a745;
                    color: white;
                    border: none;
                    border-radius: 5px;
                    cursor: pointer;
                }
                button:hover {
                    background-color: #218838;
                }
            </style>
            <form>
                <slot name="campo1">Campo 1 por defecto</slot>
                <slot name="campo2">Campo 2 por defecto</slot>
                <button type="submit">Enviar</button>
            </form>
        `;
        
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
}

customElements.define('espe-formulario', EspeFormulario);

export { EspeFormulario };