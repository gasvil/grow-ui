import {html, LitElement, PropertyValues, TemplateResult} from "lit";
import {customElement, property, query, state} from "lit/decorators.js";
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

    @property({attribute: 'password-icon-on'})
    passwordIconOn?: string

    @property({attribute: 'password-icon-off'})
    passwordIconOff?: string

    @property()
    regex?: string

    @property({attribute: 'max-length'})
    maxLength?: number

    @property()
    error?: string

    @state()
    private _showPassword: boolean = false

    @state()
    private _inputType: string = 'text'

    @query(".gr-textfield__input")
    private _ref: HTMLInputElement | undefined

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
                            type="${this._inputType}"
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
                    ${this.setPasswordIcon()}
                    ${this.setCustomPlaceholder()}
                </label>
                ${this.setErrorMessage()}
            </div>
        `
    }

    protected updated(_: PropertyValues): void {
        this.handleFocus(undefined)
        setTimeout(this.handlePlaceholderIn, 500)
    }

    protected shouldUpdate(_changedProperties: PropertyValues): boolean {
        this.setIcons()
        return super.shouldUpdate(_changedProperties);
    }

    protected createRenderRoot(): HTMLElement | DocumentFragment {
        this.style.display = 'inline-block'
        this._inputType = this.inputType == 'password' ? 'password' : 'text'
        this.setWidth()
        return this
    }

    private setWidth = (): void => {
        const width = this.width ?? ""
        if (width == "full") {
            this.style.display = "block"
        } else if (!isNaN(parseInt(width.toString()))) {
            this.style.display = "block"
            this.style.maxWidth = `${this.width}px`
        }
    }

    private setIcons = (): void => {
        this.leadingIcon && (this._textfieldIcons.leading = html`<i
                class="gr-textfield__icon gr-textfield__icon--leading ${this.leadingIcon}"></i>`)
        this.trailingIcon && (this._textfieldIcons.trailing = html`<i
                class="gr-textfield__icon gr-textfield__icon--trailing ${this.trailingIcon}"></i>`)
        this.loading && (this._textfieldIcons.loading = html`
            <gr-loader class="gr-textfield__loader" size="15" thickness="2" priority="${this.priority}"
                       gray></gr-loader>`)
    }

    private setCustomPlaceholder = (): TemplateResult | null => {
        if (this.placeholderPosition) {
            return html`<span class="gr-textfield__placeholder">${this.placeholder}</span>`
        } else {
            return null
        }
    }

    private setPasswordIcon = (): TemplateResult | null => {
        let passwordIcon = this._showPassword ? this.passwordIconOff : this.passwordIconOn
        if (passwordIcon && this.inputType == 'password') {
            return html`
                <button
                        type="button"
                        class="gr-textfield__icon gr-textfield__icon--password ${passwordIcon}"
                        @click="${this.handlePasswordAction}"
                ></button>`
        } else {
            return null
        }
    }

    private handlePasswordAction = (): void => {
        this._showPassword = !this._showPassword
        this._inputType = this._showPassword ? 'text' : 'password'
        const contentLength = this._ref?.value.length ?? 0
        this._ref?.focus()
        setTimeout(() => {
            this._ref?.setSelectionRange(contentLength, contentLength)
        })
    }

    private setErrorMessage = (): TemplateResult | null => {
        if (this.error && this.error.length > 0) {
            return html`<span class="gr-textfield__error-msg">${this.error}</span>`
        } else {
            return null
        }
    }

    private handlePlaceholderIn = (): void => {
        if (this.placeholderPosition == 'overline') {
            const placeholder = this.querySelector('.gr-textfield__placeholder') as HTMLElement
            const backgroundColor = findParentBackground(this)
            if (placeholder) {
                placeholder.style.backgroundColor = backgroundColor ?? 'white'
            }
        }
    }

    private setLabel = (): TemplateResult | null => {
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

    private handleFocus = (e?: Event): void => {
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

    private setRegex = (): void => {
        if (this.regex) {
            this._regex = this.regex
        } else if (!this.regex && this.inputType) {
            this._regex = getRegexFromType(this.inputType)
        }
    }

    private handleValue = (e: Event): void => {
        const t = e.target as HTMLInputElement

        if (t.validity.patternMismatch) {
            if (['password', 'email', 'url', undefined].includes(this.inputType)) {
                const errorEvent = new CustomEvent('gr-error', e)
                this.dispatchEvent(errorEvent)
                this.value = t.value
            }
        } else {
            const inputEvent = new CustomEvent('gr-input', e)
            this.dispatchEvent(inputEvent)
            this.value = t.value
        }

        t.value = this.value
    }

}

declare global {
    interface HTMLElementTagNameMap {
        'gr-textfield': GrTextfield
    }
}