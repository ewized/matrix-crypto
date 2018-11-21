import { LitElement, html } from 'https://unpkg.com/@polymer/lit-element@0.6.3/lit-element.js?module';
import './paper.js';

export class Pane extends LitElement {
  render() {
    return html`
    <x-paper>
      <slot name="title"></slot>
      <p>
        <slot></slot>
      </p>
    </x-paper>
    `
  }
}
customElements.define('x-pane', Pane)
