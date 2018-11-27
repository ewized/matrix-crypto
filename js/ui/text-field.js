import { LitElement, html } from 'https://unpkg.com/@polymer/lit-element@0.6.3/lit-element.js?module';

customElements.define('x-text-field', class extends LitElement {

  render() {
    return html`
    <style>
      .text-field {
          background-color: #0000000a;
          color: #00000099;
          padding-left: 12px;
          padding-right: 12px;
          width: 226px;
          height: 56px;
          font-size: 16px;
          border-radius: 4px 4px 0px 0px;
          border-width: 0px 0px 1px 0px;
          border-color: #000000cc;
      }
      .text-field:focus {
          border-width: 0px 0px 2px 0px;
          color: #000000de;
          outline: none;
          height: 55px;
      }
    </style>
    <input @keyup=${event => this.onChange(event.path[0].value)} class="text-field" type="text" placeholder=${this.placeholder || ''} ?disabled=${this.disabled} maxlength=${this.maxlength || ''}>
    `
  }
})
