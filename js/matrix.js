import { LitElement, html } from 'https://unpkg.com/@polymer/lit-element@0.6.3/lit-element.js?module'

customElements.define('x-matrix', class extends LitElement {
  render() {
    let [ m, n ] = math.size(this.matrix.toArray())
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
        ${[ ...Array(m).keys() ].map(m => html`<div class="m m-${m}">${[ ...Array(n).keys() ].map(n => html`<div class="n n-${n}">${math.subset(this.matrix, math.index(m, n))}</div>`)}</div>`)}
      </div>
    `
  }
})
