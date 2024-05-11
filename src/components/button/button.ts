import {html, LitElement, PropertyValues, unsafeCSS} from "lit";
import {customElement, property, query} from "lit/decorators.js";
import global from "@commons/styles/global.css?inline"
import style from "./button.css?inline"
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

    @property()
    state: ButtonState = 'enabled'

    @property({attribute: 'leading-icon'})
    leadingIcon?: string

    @query('.gr-button')
    host?: HTMLElement

    // createRenderRoot() {
    //     const separateClass = this.modifierStyle().split(' ')
    //     separateClass.forEach(it => {
    //         this.classList.add(it)
    //     })
    //     return this
    // }

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
                const sizes = this.host.getBoundingClientRect()
                const width = sizes.width
                this.host.style.width = `${width}px`
            } else {
                this.host?.style.removeProperty('width')
            }
        }, 100)
    }

    shouldUpdate(changedProperties: PropertyValues) {
        this.setLoadingButtonSize(changedProperties)
        return true
    }

    private setIcons() {
        const icons = []
        if (this.leadingIcon) {
            icons.push(html`<i class="${this.leadingIcon}"></i>`)
        }
        return icons
    }

    private setContent = () => {
        if (this.state == 'loading') {
            return html`<gr-loader negative size="15"></gr-loader>`
        } else {
            return html`
                ${this.setIcons()[0]}
                <slot></slot>
            `
        }
    }

    render() {
        return html`
            <button type="button" class="${this.modifierStyle()}">
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