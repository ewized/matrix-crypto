import { LitElement, html } from 'https://unpkg.com/@polymer/lit-element@0.6.3/lit-element.js?module'
import { generateMatrix } from './utils.js'
import './page.js'
import './header.js'
import './footer.js'
import './encrypt-matrix.js'
import './decrypt-matrix.js'

const PAGE_WIDTH = '1280px'

customElements.define('x-app', class extends LitElement {

  /** Experimenting with this, as it renders the DOM in the element not in a shadow */
  createRenderRoot() {
    return this
  }

  render() {
    return html`
      <style>
        br {
          clear: both;
        }
        x-page x-encrypt-matrix, x-page x-decrypt-matrix {
          float: left;
        }
      </style>
      <x-header width=${PAGE_WIDTH}>Matrix Crypto</x-header>
      <x-page width=${PAGE_WIDTH}>
        <x-encrypt-matrix></x-encrypt-matrix>
        <x-decrypt-matrix></x-decrypt-matrix>
      </x-page>
      <br>
      <x-footer></x-footer>
    `
  }
})
