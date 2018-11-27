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

  updateMatrix(value) {
    let values = encodeChar(value)
    let i = 0;
    for (let j = 0 ; j < values.length ; j++) {
      if (j % 6 == 5) {
        i++;
      }
      this.matrix[i][j] = values[j]
    }
    let e = this.querySelector("x-matrix")
    console.log(this.matrix, e)
    //this.requestUpdate()
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
          <x-text-field .onChange=${value => this.updateMatrix(value)} .placeholder=${'Encrypt message'} .maxlength=${25}></x-text-field>
          <x-matrix id="matrix" .bgMatrix=${this.bgMatrix} .matrix=${this.matrix}></x-matrix>
        </x-center>
      </x-pane>
    `
  }
})
