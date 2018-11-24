import { LitElement, html } from 'https://unpkg.com/@polymer/lit-element@0.6.3/lit-element.js?module'

customElements.define('x-matrix', class extends LitElement {
  static get properties() {
    return {
      m: { type: Number },
      n: { type: Number }
    }
  }

  render() {
    // basicly generate a random matrix filled with values
    this.matrix = math.matrix([ ...Array(this.m) ].map(x => [ ...Array(this.n) ].map(_ => Math.floor(Math.random() * 27))))
    return html`
      <style>
        * {
          --size: 50px;
        }
        .matrix-wrapper {
          overflow: hidden;
        }
        .m {
          height: calc(var(--size) + 2px);
        }
        .m > .n {
          float: left;
          height: var(--size);
          width: var(--size);
          line-height: var(--size);
          text-align: center;
        }
      </style>
      <div>
      Det: ${math.det(this.matrix)}
      </div>
      <div class="matrix-wrapper">
        <!-- This is the mxn matrix -->
        ${[ ...Array(this.m).keys() ].map(m => html`<div class="m m-${m}">${[ ...Array(this.m).keys() ].map(n => html`<div class="n n-${n}">${math.subset(this.matrix, math.index(m, n))}</div>`)}</div>`)}
      </div>
    `
  }
})
