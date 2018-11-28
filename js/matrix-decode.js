import { LitElement, html } from 'https://unpkg.com/@polymer/lit-element@0.6.3/lit-element.js?module'
import { decodeChar, MATRIX_SIZE, LOCK, UNLOCK } from './utils.js'

customElements.define('x-matrix-decode', class extends LitElement {

  constructor() {
    super()
    this.lockBg = false
    this.bgMatrix = math.zeros(MATRIX_SIZE, MATRIX_SIZE).toArray()
    this.matrix = math.zeros(MATRIX_SIZE, MATRIX_SIZE).toArray()
  }

  /** Get the background color at i, j of the matrix */
  bg(i, j) {
    return math.subset(this.bgMatrix, math.index(i, j))
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
    if (this.lockBg) {
      return
    }
    this.bgMatrix[i][j] = this.bg(i, j) > 0 ? 0 : 1
    this.requestUpdate()
    this.changeHandler()
  }

  inputValidation(event, i, j) {
    let value = Number(event.path[0].value)
    if (!(value >= 0)) {
      value = event.path[0].value = 0
    }
    this.matrix[i][j] = value
    this.changeHandler()
  }

  changeHandler() {
    this.onChange(this.matrix, this.bgMatrix, this)
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
        .values {
          border: none;
          display: block;
          width: 100%;
          height: 100%;
          text-align: center;
          font-size: 14px;
        }
        .values:focus {
          outline: none;
        }
        .float-rel {
          position: absolute;
          margin: -1px 0 0 calc(var(--size) * ${m});
          display: block;
          background: #666;
          border: 1px solid #333;
          height: calc(var(--size) - 21px);
          width: calc(var(--size) - 21px);
          line-height: var(--size);
          text-align: center;
          color: #fff;
          font-weight: bold;
          border-radius: 0 5px 5px 0;
          padding: 10px
        }
        input::-webkit-outer-spin-button, input::-webkit-inner-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }
      </style>
      <div class="matrix-wrapper">
        <div class="float-rel" @click=${e => {
          this.lockBg = !this.lockBg
          this.requestUpdate()
        }}>
          ${this.lockBg ? LOCK : UNLOCK}
        </div>
        <!-- This is the mxn matrix -->
        ${[ ...Array(m).keys() ].map(i => html`<div class="m m-${i}">
          ${[ ...Array(n).keys() ].map(j => html`<div class="n n-${j}" @click=${event => this.toggleValueAt(i, j)}>
            <input onclick="this.select()" @change=${event => this.inputValidation(event, i, j)} ?disabled=${!this.lockBg} class="values ${this.bg(i, j) > 0 ? "invert" : "normal"}" type="number" value="0" min="0">
          </div>`)}
        </div>`)}
      </div>
    `
  }
})
