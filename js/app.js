import { LitElement, html } from 'https://unpkg.com/@polymer/lit-element@0.6.3/lit-element.js?module'
import './ui/pane.js'

class App extends LitElement {
  render() {
    return html`<x-pane>
        hello world
    </x-pane>`
  }
}
customElements.define('x-app', App)
