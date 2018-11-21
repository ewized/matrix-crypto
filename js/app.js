import { LitElement, html } from 'https://unpkg.com/@polymer/lit-element@0.6.3/lit-element.js?module'
import './ui/pane.js'
import './ui/button.js'
import './page.js'
import './header.js'
import './footer.js'

customElements.define('x-app', class extends LitElement {
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
        <x-footer></x-footer>
      </x-page>
    `
  }
})
