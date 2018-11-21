import { LitElement, html } from 'https://unpkg.com/@polymer/lit-element@0.6.3/lit-element.js?module';

export class Paper extends LitElement {
  render() {
    return html`
    <style>
      .paper {
        margin: 10px;
        padding: 10px;
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
}
customElements.define('x-paper', Paper)
