import {html, LitElement, PropertyValues, TemplateResult} from "lit";
import {customElement, property} from "lit/decorators.js";
import {findParentBackground, getRegexFromType, modifiersToBem} from "../../commons/scripts/functions.ts";
import "./textfield.scss"
import "@components/button/button"

export type TextfieldSize = 'small' | 'medium' | 'large'
export type TextfieldType = 'outline' | 'outline-filled' | 'filled' | 'underline' | 'underline-filled'
export type TextfieldState = 'enabled' | 'disabled' | 'focus'
export type TextfieldPriority = 'primary' | 'secondary' | 'tertiary'
export type TextfieldPlaceholderPosition = 'inside' | 'outside' | 'overline'
export type TextfieldInputType = 'text' | 'number' | 'email' | 'password' | 'alphanumeric' | 'url'

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

    @property({attribute: 'leading-icon'})
    leadingIcon?: string

    @property({attribute: 'trailing-icon'})
    trailingIcon?: string

    @property()
    width?: number | 'full'

    @property({attribute: 'input-type'})
    inputType?: TextfieldInputType

    @property()
    regex?: string

    @property({attribute: 'max-length'})
    maxLength?: number

    @property()
    error?: string

    private _textfieldIcons: {
        leading?: TemplateResult,
        trailing?: TemplateResult,
        loading?: TemplateResult,
    } = {}

    private _regex: string | undefined

    protected render(): TemplateResult {
        return html`
            <div id="${this.refId}" class="${this.modifierStyle()}">
                ${this.setLabel()}
                <label class="gr-textfield__container">
                    ${this._textfieldIcons.leading}
                    <input
                            class="gr-textfield__input"
                            type="text"
                            .value="${this.value}"
                            pattern="${this._regex ? this._regex : null}"
                            placeholder="${!this.placeholderPosition ? this.placeholder : null}"
                            maxlength="${this.maxLength}"
                            @focusin="${this.handleFocus}"
                            @focusout="${this.handleFocus}"
                            @input="${this.handleValue}"
                    >
                    ${this._textfieldIcons.trailing}
                    ${this._textfieldIcons.loading}
                    ${this.setCustomPlaceholder()}
                    ${this.setErrorMessage()}
                </label>
            </div>
        `
    }

    protected updated(_: PropertyValues) {
        this.handleFocus(undefined)
        setTimeout(this.handlePlaceholderIn, 500)
    }

    protected shouldUpdate(_changedProperties: PropertyValues): boolean {
        this.setIcons()
        return super.shouldUpdate(_changedProperties);
    }

    protected createRenderRoot(): HTMLElement | DocumentFragment {
        this.style.display = 'inline-block'
        this.setWidth()
        return this
    }

    private setWidth = () => {
        const width = this.width ?? ""
        if (width == "full") {
            this.style.display = "block"
        } else if (!isNaN(parseInt(width.toString()))) {
            this.style.display = "block"
            this.style.maxWidth = `${this.width}px`
        }
    }

    private setIcons = () => {
        this.leadingIcon && (this._textfieldIcons.leading = html`<i
                class="gr-textfield__icon gr-textfield__icon--leading ${this.leadingIcon}"></i>`)
        this.trailingIcon && (this._textfieldIcons.trailing = html`<i
                class="gr-textfield__icon gr-textfield__icon--trailing ${this.trailingIcon}"></i>`)
        this.loading && (this._textfieldIcons.loading = html`
            <gr-loader class="gr-textfield__loader" size="15" thickness="2" priority="${this.priority}"
                       gray></gr-loader>`)
    }

    private setCustomPlaceholder = () => {
        if (this.placeholderPosition) {
            return html`<span class="gr-textfield__placeholder">${this.placeholder}</span>`
        } else {
            return null
        }
    }

    private setErrorMessage = () => {
        if (this.error && this.error.length > 0) {
            return html`<span class="gr-textfield__error-msg">${this.error}</span>`
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
            this.placeholderPosition && this.placeholder ? 'placeholder-' + this.placeholderPosition : null,
            this.leadingIcon ? 'leading' : null,
            this.error != null ? 'error' : null,
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
        const loader = this.querySelector('.gr-textfield__loader') as HTMLElement
        if (document.activeElement == target) {
            loader?.removeAttribute('gray')
            this.setAttribute('state', 'focus')
            this.handlePlaceholderIn()
            this.setRegex()
        } else if (this.state == 'focus') {
            loader?.setAttribute('gray', '')
            this.setAttribute('state', 'enabled')
        }
    }

    private setRegex = () => {
        if (this.regex) {
            this._regex = this.regex
        } else if (!this.regex && this.inputType) {
            this._regex = getRegexFromType(this.inputType)
        }
    }

    private handleValue = (e: Event) => {
        const t = e.target as HTMLInputElement
        this.value = t.value

        const inputEvent = new CustomEvent('gr-input', e)
        this.dispatchEvent(inputEvent)

        if (!t.validity.patternMismatch) {
            const errorEvent = new CustomEvent('gr-error', e)
            this.dispatchEvent(errorEvent)
        }

        console.log('Valid:: ', !t.validity.patternMismatch)
    }

}

declare global {
    interface HTMLElementTagNameMap {
        'gr-textfield': GrTextfield
    }
}