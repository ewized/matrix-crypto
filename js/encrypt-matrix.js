import { LitElement, html } from 'https://unpkg.com/@polymer/lit-element@0.6.3/lit-element.js?module'
import { encodeChar, generateMatrix, MATRIX_SIZE } from './utils.js'
import './ui/center.js'
import './ui/pane.js'
import './ui/text-field.js'
import './matrix.js'

customElements.define('x-encrypt-matrix', class extends LitElement {

  constructor() {
    super();
    this.bgMatrix = generateMatrix(MATRIX_SIZE, MATRIX_SIZE, 2)
    this.matrix = math.zeros(MATRIX_SIZE, MATRIX_SIZE).toArray()
  }

  updateMatrix(value, textField) {
    let tmp = math.zeros(MATRIX_SIZE, MATRIX_SIZE).toArray()
    let values = encodeChar(value.padEnd(MATRIX_SIZE ** 2, ' '))
    let i = 0;
    for (let j = 0 ; j < values.length ; j++) {
      //console.log(i, j % 5)
      tmp[i][j % MATRIX_SIZE] = values[j]
      if (j % MATRIX_SIZE == MATRIX_SIZE - 1) {
        i++;
      }
    }
    let encryptedMatrix = math.multiply(tmp, this.bgMatrix)
    for (let i = 0 ; i < MATRIX_SIZE ; i++) {
      for (let j = 0 ; j < MATRIX_SIZE ; j++) {
        this.matrix[i][j] = encryptedMatrix[i][j]
      }
    }
    textField.parentNode.children[1].requestUpdate()
  }

  render() {
    return html`
      <style>
        x-text-field {
          padding-bottom: 16px;
          display: block;
        }
      </style>
      <x-pane>
        <h3 slot="title">Encrypt Text</h3>
        <x-center>
          <x-text-field .onChange=${(value, textField) => this.updateMatrix(value, textField)} placeholder="Encrypt message" maxlength=${MATRIX_SIZE ** 2}></x-text-field>
          <x-matrix .bgMatrix=${this.bgMatrix} .matrix=${this.matrix}></x-matrix>
        </x-center>
      </x-pane>
    `
  }
})
