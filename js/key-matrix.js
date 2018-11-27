import { LitElement, html } from 'https://unpkg.com/@polymer/lit-element@0.6.3/lit-element.js?module'
import { generateMatrix } from './utils.js'
import './ui/center.js'
import './ui/pane.js'
import './ui/button.js'
import './matrix.js'

customElements.define('x-key-matrix', class extends LitElement {

  render() {
    return html`
      <style>
        x-button {
          padding: 16px 0;
          display: block;
        }
      </style>
      <x-pane>
        <h3 slot="title">Generate Key</h3>
        <x-center>
          <x-matrix .matrix=${this.matrix} .canToggle=${true} .bgEqualsMatrix=${true} .hideText=${true}></x-matrix>
          <x-button @click=${event => {
            this.matrix = generateMatrix(5, 5, 2)
            this.requestUpdate()
            _.forEach(this.parentNode.children, e => e.requestUpdate && e.requestUpdate())
          }}>Regenerate</x-button>
        </x-center>
      </x-pane>
    `
  }
})
