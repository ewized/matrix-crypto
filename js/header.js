import { LitElement, html } from 'https://unpkg.com/@polymer/lit-element@0.6.3/lit-element.js?module'
import './page.js'

customElements.define('x-header', class extends LitElement {

  render() {
    return html`
      <style>
        .header {
          background: #234;
          height: 60px;
          line-height: 60px;
          overflow: hidden;
          border-bottom: 1px solid #456;
          box-shadow: 0 5px 5px #00000022;
        }
        .title {
          margin: 0;
          padding: 0 0 0 25px;
          color: #fff;
        }
      </style>
      <header class="header">
        <x-page width="${this.attributes.width.value}">
          <h1 class="title">
            <slot></slot>
          </h1>
        </x-page>
      </header>
    `
  }
})
