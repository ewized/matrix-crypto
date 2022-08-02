import { LitElement, html } from 'https://unpkg.com/@polymer/lit-element@0.6.3/lit-element.js?module'

customElements.define('x-footer', class extends LitElement {

  render() {
    return html`
      <style>
        .footer {
          text-align: center;
          padding-bottom: 25px;
        }
        .copy, a, a:visited {
          color: #00000066;
          text-decoration: none;
        }
        a:hover {
          color: #00000088;
          text-decoration: underline;
        }
        a:focus, a:active {
          color: #00000099;
          text-decoration: none;
          border-bottom: 1px dotted #111;
        }
      </style>
      <footer class="footer">
        <small class="copy">
          Copyright &copy ${new Date().getFullYear()}.
        </small>
      </footer>
    `
  }
})
