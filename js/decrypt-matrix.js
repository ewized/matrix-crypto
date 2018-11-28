import { LitElement, html } from 'https://unpkg.com/@polymer/lit-element@0.6.3/lit-element.js?module'
import { decodeChar } from './utils.js'
import './ui/center.js'
import './ui/pane.js'
import './ui/text-field.js'
import './matrix.js'
import './matrix-decode.js'

customElements.define('x-decrypt-matrix', class extends LitElement {

  liveEdit(matrix, key, element) {
    let decodedText = ''
    if (math.det(key) == 0) {
      decodedText = 'bad key (det == 0)'
    } else {
      let decodedMatrix = math.multiply(matrix, math.inv(key))
      for (let i = 0 ; i < decodedMatrix.length ; i++) {
        for (let j = 0 ; j < decodedMatrix[i].length ; j++) {
          decodedText += decodeChar(decodedMatrix[i][j])
        }
      }
    }
    element.parentNode.children[1].shadowRoot.children[1].value = decodedText
  }

  render() {
    return html`
      <style>
        x-text-field {
          padding-top: 16px;
          display: block;
        }
      </style>
      <x-pane>
        <h3 slot="title">Decrypt Text</h3>
        <x-center>
          <x-matrix-decode .onChange=${(matrix, key, element) => this.liveEdit(matrix, key, element)}></x-matrix-decode>
          <x-text-field .disabled=${true} placeholder="Decrypted message"></x-text-field>
        </x-center>
      </x-pane>
    `
  }
})
