import { LitElement, html } from 'https://unpkg.com/@polymer/lit-element@0.6.3/lit-element.js?module'
import { generateMatrix } from './utils.js'
import './ui/paper.js'
import './ui/pane.js'
import './ui/button.js'
import './page.js'
import './header.js'
import './footer.js'
import './matrix.js'
import './matrix-decode.js'
import './key-matrix.js'
import './encrypt-matrix.js'
import './decrypt-matrix.js'

const PAGE_WIDTH = '720px'

customElements.define('x-app', class extends LitElement {

  constructor() {
    super();
    this.keyMatrix = generateMatrix(5, 5, 2)
  }

  /** Experimenting with this, as it renders the DOM in the element not in a shadow */
  createRenderRoot() {
    return this
  }

  render() {
    return html`
      <x-header width=${PAGE_WIDTH}>Matrix Crypto</x-header>
      <x-page width=${PAGE_WIDTH}>
        <x-encrypt-matrix></x-encrypt-matrix>
        <x-decrypt-matrix></x-decrypt-matrix>
      </x-page>
      <x-footer></x-footer>
    `
  }
})

// let M = math.matrix([ ...Array(5) ].map(x => [ ...Array(5) ].map(_ => Math.floor(Math.random() * 27))))
// // restrict the key to only 0 and 1 to prevent fractions
// let A = math.matrix([ ...Array(5) ].map(x => [ ...Array(5) ].map(_ => Math.floor(Math.random() * 2))))
// while (math.det(A) == 0) {
//   A = math.matrix()
// }
// // this is the encrypted matrix that you can send someone to decrypt
// let MC = math.multiply(M, A)
// // matrix M will be the same as matrix Z if the decoding went correctly
// let Z = math.multiply(MC, math.inv(A))

/*
<x-paper>
  <center>
    <!-- <x-matrix .matrix=${M}></x-matrix> -->
    <!-- <x-matrix .matrix=${A}></x-matrix> -->
    <!-- <x-matrix .matrix=${MC}></x-matrix> -->
    <!-- <x-matrix .matrix=${Z}></x-matrix> -->
  </center>
</x-paper>
*/
