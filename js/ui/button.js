import { LitElement, html } from 'https://unpkg.com/@polymer/lit-element@0.6.3/lit-element.js?module';

customElements.define('x-button', class extends LitElement {
  render() {
    return html`
      <style>
        .button {
            background: #567;
            color: #fff;
            padding: 4px 16px;
            height: 36px;
            min-width: 64px;
            font-size: 14px;
            border-radius: 4px;
        }
        .button:hover {
            background: #678;
        }
        .button:focus {
          color: #ededed;
          background: #789;
          outline: none;
        }
      </style>
      <button class="button">
        <slot></slot>
      </button>
    `
  }
})
