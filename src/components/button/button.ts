import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";

@customElement('gr-button')
export class GrButton extends LitElement {
    render() {
        return html`
            <button>Click me</button>
        `;
    }
}