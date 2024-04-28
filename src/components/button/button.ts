import { LitElement, html, unsafeCSS } from "lit";
import { customElement, property } from "lit/decorators.js";
import styles from "./button.css?inline"
import { modifiersToBem } from "../../util/functions";

export type ButtonType = 'box' | 'outline' | 'negative' | 'inline'
export type ButtonSize = 'small' | 'medium' | 'large'
export type ButtonPriority = 'primary' | 'secondary' | 'tertiary'

@customElement('gr-button')
export class GrButton extends LitElement {

	static styles = [unsafeCSS(styles)]

	@property()
	label?: string

	@property()
	type?: ButtonType = 'box'

	@property()
	size?: ButtonSize = 'medium'

	@property()
	priority?: ButtonPriority = 'primary'

	private modifierStyle = () => {
		return modifiersToBem('button', [
			this.type,
			this.size,
			this.priority
		])
	}

	render() {
		return html`
			<button class="${this.modifierStyle()}">
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