customElements.define('user-card', class extends HTMLElement{
    ConnectedCallback(){
        this.attachShadow({mode: 'open'})

        this.shadowRoot.innerHTML = `
        <div> Имя: 
            <slot name = "username"></slot>
        </div>
        <div>Дата рождения:
            <slot name="bithday"></slot>
            </div>
        `;
    }
});
customElements.define('custom-menu', class extends HTMLElement{
    connectedCallback() {
        this.attachShadow({mode: 'open'})
        this.shadowRoot.innerHTML = `
        <div>
        <slot name = "title"></slot>
        </div>
        <div>
        <slot name = "item"></slot>
        </div>
        `
    }
})
customElements.define('custom-menu', class extends HTMLElement{
    connectedCallback() {
        this.attachShadow({mode: 'open'})

        this.shadowRoot.append( tmpl.content.cloneNode(true) )

        this.shadowRoot.querySelector('slot[name="title"]').onclick = () => {

            this.shadowRoot.querySelector('.menu').classList.toggle('closed')
        }

    }
})