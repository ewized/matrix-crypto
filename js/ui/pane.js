import { LitElement, html } from 'https://unpkg.com/@polymer/lit-element@0.6.3/lit-element.js?module';
import './paper.js';

customElements.define('x-pane', class extends LitElement {
  render() {
    return html`
    <style>
      .title {
        background: #567;
        margin: 0;
        padding: 1px 18px;
        color: #fff;
        border: 1px solid #bbb;
      }
      .content {
        padding: 10px;
      }
    </style>
    <x-paper>
      <div class="title">
        <slot name="title"></slot>
      </div>
      <p class="content">
        <slot></slot>
      </p>
    </x-paper>
    `
  }
})
