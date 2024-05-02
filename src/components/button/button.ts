import { LitElement, html, unsafeCSS } from "lit";
import { customElement, property } from "lit/decorators.js";
import styles from "./button.css?inline"
import { modifiersToBem } from "../../common/scripts/functions";

export type ButtonType = 'box' | 'outline' | 'negative' | 'inline'
export type ButtonSize = 'small' | 'medium' | 'large'
export type ButtonPriority = 'primary' | 'secondary' | 'tertiary'
export type ButtonState = 'enabled' | 'disable' | 'loading'

@customElement('gr-button')
export class GrButton extends LitElement {

	static styles = [unsafeCSS(styles)]

	@property()
	label: string = ""

	@property()
	type?: ButtonType = 'box'

	@property()
	size?: ButtonSize = 'medium'

	@property()
	priority?: ButtonPriority = 'primary'

	@property()
	state?: ButtonState = 'enabled'

	private modifierStyle = () => {
		return modifiersToBem('button', [
			this.type,
			this.size,
			this.priority,
			this.state
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