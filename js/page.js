import { LitElement, html } from 'https://unpkg.com/@polymer/lit-element@0.6.3/lit-element.js?module'

customElements.define('x-page', class extends LitElement {
  render() {
    return html`
      <style>
        .page {
          max-width: 1280px;
          margin: 0 auto;
        }
      </style>
      <div class="page">
        <slot></slot>
      </div>
    `
  }
})
