import {html, LitElement, PropertyValues, unsafeCSS} from "lit";
import {customElement, property, query} from "lit/decorators.js";
import style from "./button.css?inline"
import global from "@commons/styles/global.css?inline"
import {modifiersToBem} from "../../commons/scripts/functions";
import "@components/loader/loader"

export type ButtonType = 'box' | 'outline' | 'negative' | 'inline'
export type ButtonSize = 'small' | 'medium' | 'large'
export type ButtonPriority = 'primary' | 'secondary' | 'tertiary'
export type ButtonState = 'enabled' | 'disabled' | 'loading'

@customElement('gr-button')
export class GrButton extends LitElement {

    static styles = [unsafeCSS(global), unsafeCSS(style)]

    @property()
    type: ButtonType = 'box'

    @property()
    size: ButtonSize = 'medium'

    @property()
    priority: ButtonPriority = 'primary'

    @property({reflect: true})
    state: ButtonState = 'enabled'

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

    private setLoadingButtonSize = (changedProperties: PropertyValues) => {
        setTimeout(() => {
            if (changedProperties.has('state') && this.state == 'loading' && this.host) {
                console.log(this.host)
                const sizes = this.host.getBoundingClientRect()
                const width = sizes.width
                this.host.style.width = `${width}px`
            } else {
                this.host?.style.removeProperty('width')
            }
        }, 100)
    }

    private setContent = () => {
        if (this.state == 'loading') {
            return html`<gr-loader negative size="15"></gr-loader>`
        } else {
            return html`<slot></slot>`
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
            </button>
        `;
    }

}

declare global {
    interface HTMLElementTagNameMap {
        'gr-button': GrButton
    }
}