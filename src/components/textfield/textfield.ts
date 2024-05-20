import {html, LitElement, PropertyValues} from "lit";
import {customElement, property} from "lit/decorators.js";
import {findParentBackground, modifiersToBem} from "../../commons/scripts/functions.ts";
import "./textfield.scss"
import "@components/button/button"

export type TextfieldSize = 'small' | 'medium' | 'large'
export type TextfieldType = 'outline' | 'outline-filled' | 'filled' | 'underline' | 'underline-filled'
export type TextfieldState = 'enabled' | 'disabled' | 'focus'
export type TextfieldPriority = 'primary' | 'secondary' | 'tertiary'
export type TextfieldPlaceholderPosition = 'inside' | 'outside' | 'overline'

@customElement('gr-textfield')
export class GrTextfield extends LitElement {

    @property({attribute: 'ref-id'})
    refId?: string

    @property()
    label?: string

    @property()
    value: string = ''

    @property()
    size?: TextfieldSize = 'medium'

    @property()
    type?: TextfieldType = 'outline'

    @property()
    state?: TextfieldState = 'enabled'

    @property()
    priority?: TextfieldPriority = 'primary'

    @property()
    placeholder?: String

    @property({attribute: 'placeholder-position'})
    placeholderPosition?: TextfieldPlaceholderPosition

    @property({type: Boolean})
    loading?: boolean

    @property()
    error?: string

    render() {
        return html`
            <div class="${this.modifierStyle()}">
                ${this.setLabel()}
                <label class="gr-textfield__container">
                    <input
                            class="gr-textfield__input"
                            type="text"
                            .value="${this.value}"
                            placeholder="${!this.placeholderPosition ? this.placeholder : ''}"
                            @focusin="${this.handleFocus}"
                            @focusout="${this.handleFocus}"
                            @input="${this.handleValue}"
                    >
                    ${this.setCustomPlaceholder()}
                    ${this.setLoadingIcon()}
                </label>
            </div>
        `
    }

    protected updated(_: PropertyValues) {
        this.handleFocus(undefined)
        setTimeout(this.handlePlaceholderIn, 500)
        this.setLoadingIcon()
    }

    protected createRenderRoot(): HTMLElement | DocumentFragment {
        this.style.display = 'inline-block'
        return this
    }

    private setCustomPlaceholder = () => {
        if (this.placeholderPosition) {
            return html`<span class="gr-textfield__placeholder">${this.placeholder}</span>`
        } else {
            return null
        }
    }

    private handlePlaceholderIn = () => {
        if (this.placeholderPosition == 'overline') {
            const placeholder = this.querySelector('.gr-textfield__placeholder') as HTMLElement
            const backgroundColor = findParentBackground(this)
            if (placeholder) {
                placeholder.style.backgroundColor = backgroundColor ?? 'white'
            }
        }
    }

    private handlePlaceholderOut = () => {

    }

    private setLabel = () => {
        if (this.label) {
            return html`<span class="gr-textfield__label">${this.label}</span>`
        } else {
            return html``
        }
    }

    private modifierStyle = () => {
        return modifiersToBem('textfield', [
            this.size,
            this.type,
            this.state,
            this.priority,
            'placeholder-' + this.placeholderPosition,
            this.error != undefined ? 'error' : null,
            this.value.length > 0 ? 'content-filled' : null
        ])
    }

    private handleFocus = (e?: Event) => {
        if (e == undefined && this.state == 'focus') {
            const input = this.querySelector('.gr-textfield__input') as HTMLInputElement
            input.focus()
            return
        }

        const target = e?.target as HTMLInputElement
        if (document.activeElement == target) {
            this.setAttribute('state', 'focus')
            this.handlePlaceholderIn()
        } else if (this.state == 'focus') {
            this.setAttribute('state', 'enabled')
            this.handlePlaceholderOut()
        }
    }

    private handleValue = (e: Event) => {
        const t = e.target as HTMLInputElement
        this.value = t.value
    }

    private setLoadingIcon = () => {
        if (this.loading) {
            return html`
                <gr-loader
                        class="gr-textfield__loader"
                        size="15"
                        thickness="2"
                        priority="${this.priority}"
                ></gr-loader>`
        } else {
            return html``
        }
    }

}

declare global {
    interface HTMLElementTagNameMap {
        'gr-textfield': GrTextfield
    }
}