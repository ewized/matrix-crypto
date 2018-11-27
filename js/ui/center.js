import { LitElement, html } from 'https://unpkg.com/@polymer/lit-element@0.6.3/lit-element.js?module';

customElements.define('x-center', class extends LitElement {

  render() {
    return html`
    <style>
      .wrapper {
        text-align: center;
      }
      .wrapper .content {
        display: inline-block;
      }
    </style>
    <div class="wrapper">
      <div class="content">
        <slot></slot>
      </div>
    </div>
    `
  }
})
