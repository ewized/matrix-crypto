import { LitElement, html } from 'https://unpkg.com/@polymer/lit-element@0.6.3/lit-element.js?module'
import './ui/paper.js'
import './ui/pane.js'
import './ui/button.js'
import './page.js'
import './header.js'
import './footer.js'
import './matrix.js'

customElements.define('x-app', class extends LitElement {
  /** Experimenting with this, as it renders the DOM in the element not in a shadow */
  createRenderRoot() {
    return this
  }

  render() {
    let M = math.matrix([ ...Array(5) ].map(x => [ ...Array(5) ].map(_ => Math.floor(Math.random() * 27))))
    // restrict the key to only 0 and 1 to prevent fractions
    let A = math.matrix([ ...Array(5) ].map(x => [ ...Array(5) ].map(_ => Math.floor(Math.random() * 2))))
    while (math.det(A) == 0) {
      A = math.matrix([ ...Array(5) ].map(x => [ ...Array(5) ].map(_ => Math.floor(Math.random() * 2))))
    }
    // this is the encrypted matrix that you can send someone to decrypt
    let MC = math.multiply(M, A)
    // matrix M will be the same as matrix Z if the decoding went correctly
    let Z = math.multiply(MC, math.inv(A))

    return html`
      <x-header width="1280px">Matrix Crypto</x-header>
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
        <x-paper>
          <center>
            <x-matrix .matrix=${M}></x-matrix>
            <!-- <x-matrix .matrix=${A}></x-matrix> -->
            <!-- <x-matrix .matrix=${MC}></x-matrix> -->
            <x-matrix .matrix=${Z}></x-matrix>
          </center>
        </x-paper>
        <x-footer></x-footer>
      </x-page>
    `
  }
})
