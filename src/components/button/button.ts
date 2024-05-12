import {html, LitElement, PropertyValues, TemplateResult} from "lit";
import {customElement, property} from "lit/decorators.js";
import {modifiersToBem} from "../../commons/scripts/functions";
import "@components/loader/loader"
import './button.css'

export type ButtonType = 'box' | 'outline' | 'negative' | 'inline'
export type ButtonSize = 'small' | 'medium' | 'large'
export type ButtonPriority = 'primary' | 'secondary' | 'tertiary'
export type ButtonState = 'enabled' | 'disabled' | 'loading'

@customElement('gr-button')
export class GrButton extends LitElement {

    @property()
    content?: string

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

    @property({attribute: 'trailing-icon'})
    trailingIcon?: string

    @property()
    width?: number | 'full'

    private buttonIcons: {
        leading?: TemplateResult,
        trailing?: TemplateResult
    } = {}

    constructor() {
        super()
        this.setIcons()
    }

    createRenderRoot() {
        return this
    }

    shouldUpdate(changedProperties: PropertyValues) {
        this.setLoadingButtonSize(changedProperties)
        this.setIcons()
        this.setWidth()
        return true
    }

    render() {
        return html`
            <button type="button" class="${this.modifierStyle()}">
                ${this.setContent()}
            </button>
        `;
    }

    private modifierStyle = () => {
        return modifiersToBem('button', [
            this.type,
            this.size,
            this.priority,
            this.state
        ])
    }

    private setLoadingButtonSize = (changedProperties: PropertyValues) => {
        if (changedProperties.has('state') && this.state == 'loading' && this) {
            const sizes = this.getBoundingClientRect()
            const width = sizes.width
            this.style.width = `${width}px`
        } else {
            this?.style.removeProperty('width')
        }
    }

    private setIcons() {
        this.leadingIcon && (this.buttonIcons.leading = html`<i class="${this.leadingIcon}"></i>`)
        this.trailingIcon && (this.buttonIcons.trailing = html`<i class="${this.trailingIcon}"></i>`)
    }

    private setWidth() {
        if (this.width == 'full') {
            console.log('full width button')
        } else if (this.width != undefined && !isNaN(parseInt(this.width.toString()))) {
            const button: HTMLElement | null = this.querySelector('.gr-button')
            console.log(this.querySelector('button'))
            if (button) {
                button.style.width = `${this.width}px`
            }
        }
    }

    private setContent = () => {
        if (this.state == 'loading') {
            return html`
                <gr-loader negative size="15"></gr-loader>`
        } else {
            return html`
                ${this.buttonIcons.leading}
                <span class="gr-button__content" .innerHTML="${this.content}"></span>
                ${this.buttonIcons.trailing}
            `
        }
    }

}

declare global {
    interface HTMLElementTagNameMap {
        'gr-button': GrButton
    }
}