import { LitElement, html } from 'https://unpkg.com/@polymer/lit-element@0.6.3/lit-element.js?module'
import './ui/pane.js'
import './page.js'
import './header.js'
import './footer.js'

customElements.define('x-app', class extends LitElement {
  render() {
    return html`
      <x-header>Crypto Matrix</x-header>
      <x-page width="1280px">
        <x-pane>
          This is a test
        </x-pane>
        <x-footer></x-footer>
      </x-page>
    `
  }
})
