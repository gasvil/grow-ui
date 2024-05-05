import { LitElement, PropertyValues, html, unsafeCSS } from "lit";
import { customElement, property, query } from "lit/decorators.js";
import style from "./button.css?inline"
import global from "@commons/styles/global.css?inline"
import { modifiersToBem } from "../../commons/scripts/functions";
import "../loader/loader"

export type ButtonType = 'box' | 'outline' | 'negative' | 'inline'
export type ButtonSize = 'small' | 'medium' | 'large'
export type ButtonPriority = 'primary' | 'secondary' | 'tertiary'
export type ButtonState = 'enabled' | 'disabled' | 'loading'

@customElement('gr-button')
export class GrButton extends LitElement {

	static styles = [unsafeCSS(global), unsafeCSS(style)]

	@property()
	label?: string

	@property()
	type: ButtonType = 'box'

	@property()
	size: ButtonSize = 'medium'

	@property()
	priority: ButtonPriority = 'primary'

	@property()
	state: ButtonState = 'enabled'

	@property({type: Boolean, attribute: "custom-content"})
	customContent: Boolean = false

	@query('.gr-button')
	host?: HTMLElement

	private modifierStyle = () => {
		return modifiersToBem('button', [
			this.type,
			this.size,
			this.priority,
			this.state
		])
	}

	private setContent() {
		let content
		if (this.customContent) {
			content = null
		} else if (this.state == 'loading') {
			content = html`<gr-loader negative size=15></gr-loader>`
		} else {
			content = this.label
		}
		return content
	}

	private setLoadingButtonSize = (changedProperties: PropertyValues) => {
		if (changedProperties.has('state') && this.state == 'loading' && this.host) {
			const sizes = this.host.getBoundingClientRect()
			const width = sizes.width
			this.host.style.width = `${width}px`
		} else {
			this.host?.style.removeProperty('width')
		}
	}

	shouldUpdate(changedProperties: PropertyValues) {
		this.setLoadingButtonSize(changedProperties)
		return true
	}

	render() {
		return html`
			<button class="${this.modifierStyle()}">
				${this.setContent()}
				<slot></slot>
			</button>
		`;
	}

}

declare global {
	interface HTMLElementTagNameMap {
		'gr-button': GrButton
	}
}