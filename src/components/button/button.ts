import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement('gr-button')
export class GrButton extends LitElement {

	@property() //{type: String, reflect: true}
	label?: string

	render() {
		return html`
			<button>
				${this.label}
			</button>
		`;
	}

}

declare global {
	interface HTMLElementTagNameMap {
		'gr-button': GrButton
	}
}