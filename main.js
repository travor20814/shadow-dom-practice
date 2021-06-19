customElements.define('element-details',
  class extends HTMLElement {
    constructor() {
      super();

      // get template by id
      const template = document
        .getElementById('element-details-template')
        .content;

      // deep clone template child nodes
      const shadowRoot = this.attachShadow({ mode: 'open' })
        .appendChild(template.cloneNode(true));
  }
});