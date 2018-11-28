import { LitElement, html } from 'https://unpkg.com/@polymer/lit-element@0.6.3/lit-element.js?module'
import { encodeChar, generateMatrix } from './utils.js'
import './ui/center.js'
import './ui/pane.js'
import './ui/text-field.js'
import './matrix.js'

customElements.define('x-encrypt-matrix', class extends LitElement {

  constructor() {
    super();
    this.bgMatrix = generateMatrix(5, 5, 2)
    this.matrix = math.zeros(5, 5).toArray()
  }

  updateMatrix(value, textField) {
    let values = encodeChar(value.padEnd(25, ' '))
    let i = 0;
    for (let j = 0 ; j < values.length ; j++) {
      //console.log(i, j % 5)
      this.matrix[i][j % 5] = values[j]
      if (j % 5 == 4) {
        i++;
      }
    }
    this.matrix = math.multiply(this.matrix, this.bgMatrix)
    textField.parentNode.children[1].requestUpdate()
  }

  render() {
    return html`
      <style>
        x-text-field {
          padding: 16px 0;
          display: block;
        }
      </style>
      <x-pane>
        <h3 slot="title">Encrypt Text</h3>
        <x-center>
          <x-text-field .onChange=${(value, textField) => this.updateMatrix(value, textField)} .placeholder=${'Encrypt message'} .maxlength=${25}></x-text-field>
          <x-matrix .bgMatrix=${this.bgMatrix} .matrix=${this.matrix}></x-matrix>
        </x-center>
      </x-pane>
    `
  }
})
