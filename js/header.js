import { LitElement, html } from 'https://unpkg.com/@polymer/lit-element@0.6.3/lit-element.js?module'

customElements.define('x-header', class extends LitElement {
  render() {
    return html`
      <style>
        .header {
          background: #567;
          height: 60px;
          line-height: 60px;
          overflow: hidden;
          border-bottom: 1px solid #456;
          box-shadow: 0 5px 5px #00000022;
        }
        .inner-header {
          max-width: 1280px;
          margin: 0 auto;
        }
        .title {
          margin: 0;
          padding: 0 0 0 25px;
          color: #fff;
        }
      </style>
      <header class="header">
        <div class="inner-header">
          <h1 class="title">
            <slot></slot>
          </h1>
        </div>
      </header>
    `
  }
})
