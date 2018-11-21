import { LitElement, html } from 'https://unpkg.com/@polymer/lit-element@0.6.3/lit-element.js?module';

customElements.define('x-paper', class extends LitElement {
  render() {
    return html`
    <style>
      .paper {
        margin: 25px;
        background: #fff;
        box-shadow: 5px 5px 5px #00000011;
        font-family: sans-serif;
        line-height: 1.5;
      }
    </style>
    <div class="paper">
      <slot></slot>
    </div>
    `
  }
})
