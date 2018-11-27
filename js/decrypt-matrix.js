import { LitElement, html } from 'https://unpkg.com/@polymer/lit-element@0.6.3/lit-element.js?module'
import './ui/center.js'
import './ui/pane.js'
import './ui/text-field.js'
import './matrix.js'

customElements.define('x-decrypt-matrix', class extends LitElement {

  render() {
    return html`
      <style>
        x-text-field {
          padding: 16px 0;
          display: block;
        }
      </style>
      <x-pane>
        <h3 slot="title">Decrypt Text</h3>
        <x-center>
          <x-matrix .matrix=${math.zeros(5, 5).toArray()}></x-matrix>
          <x-text-field .disabled=${true}></x-text-field>
        </x-center>
      </x-pane>
    `
  }
})
