import { LitElement, html } from 'https://unpkg.com/@polymer/lit-element@0.6.3/lit-element.js?module'
import './ui/paper.js'
import './ui/pane.js'
import './ui/button.js'
import './page.js'
import './header.js'
import './footer.js'
import './matrix.js'

customElements.define('x-app', class extends LitElement {
  /** Experimenting with this, as it renders the DOM in the element not in a shadow */
  createRenderRoot() {
    return this
  }

  render() {
    return html`
      <x-header>Matrix Crypto</x-header>
      <x-page width="1280px">
        <x-pane>
          <h3 slot="title">Encrypt Text</h3>
          Click the button to see what it does?
          <br />
          <x-button @click="${event => alert('This is a WIP')}">Encrypt</x-button>
        </x-pane>
        <x-pane>
          <h3 slot="title">Decrypt Text</h3>
          Click the button to see what it does?
          <br />
          <x-button @click="${event => alert('This is a WIP')}">Decrypt</x-button>
        </x-pane>
        <x-paper>
          <center>
            <x-matrix m="5" n="5"></x-matrix>
          </center>
        </x-paper>
        <x-footer></x-footer>
      </x-page>
    `
  }
})
