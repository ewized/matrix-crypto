import { LitElement, html } from 'https://unpkg.com/@polymer/lit-element@0.6.3/lit-element.js?module'
import { decodeChar, JsonType } from './utils.js'

customElements.define('x-matrix', class extends LitElement {

  /** Get the background color at i, j of the matrix */
  bg(i, j) {
    return this.bgMatrix || this.bgEqualsMatrix ? math.subset(this.bgEqualsMatrix ? this.matrix : this.bgMatrix, math.index(i, j)) : false
  }

  /** Get the value at i, j of the matrix */
  valueAt(i, j) {
    return math.subset(this.matrix, math.index(i, j))
  }

  /** Get the size of the matrix */
  size() {
    return this.matrix ? math.size(this.matrix) : [0, 0]
  }

  toggleValueAt(i, j) {
    if (!this.canToggle) {
      return;
    }
    let orgValue = this.valueAt(i, j)
    this.matrix[i][j] = orgValue > 0 ? 0 : 1
    if (math.det(this.matrix) == 0) {
      alert('This will create a non invertable matrix...')
      this.matrix[i][j] = orgValue;
    }
    this.requestUpdate()
  }

  render() {
    let [ m, n ] = this.size()
    return html`
      <style>
        * {
          --size: 50px;
        }
        .matrix-wrapper {
          overflow: hidden;
          width: calc(var(--size) * ${m});
          border: 1px solid #333;
        }
        .m {
          height: var(--size);
          color: #000;
          background: #fff;
          font-size: 14px;
        }
        .m > .n {
          float: left;
          height: var(--size);
          width: var(--size);
          line-height: var(--size);
          text-align: center;
        }
        .invert {
          color: #fff;
          background: #000;
        }
      </style>
      <div class="matrix-wrapper">
        <!-- This is the mxn matrix -->
        ${[ ...Array(m).keys() ].map(i => html`<div class="m m-${i}">
          ${[ ...Array(n).keys() ].map(j => html`<div class="n n-${j} ${this.bg(i, j) > 0 ? "invert" : "normal"}" @click=${event => this.toggleValueAt(i, j)}>
            ${this.hideText ? '' : this.valueAt(i, j)}
          </div>`)}
        </div>`)}
      </div>
    `
  }
})
