import {html, LitElement, PropertyValues} from "lit";
import {customElement, property} from "lit/decorators.js";
import {modifiersToBem} from "../../commons/scripts/functions.ts";
import "./textfield.css"
import "@components/button/button"

export type TextfieldSize = 'small' | 'medium' | 'large'
export type TextfieldType = 'outline' | 'outline-filled' | 'filled' | 'underline'
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
            <label
                    class="${this.modifierStyle()}"
            >
                <input
                        type="text"
                        class="gr-textfield__input"
                        @focusin="${this.handleFocus}"
                        @focusout="${this.handleFocus}"
                >
                ${this.setLoadingIcon()}
                <div class="gr-textfield__container">
                    <span class="gr-textfield__container-leading"></span>
                    <span class="gr-textfield__container-center"></span>
                    <span class="gr-textfield__container-trailing"></span>
                </div>
            </label>
        `
    }

    protected updated(_: PropertyValues) {
        this.handleFocus(undefined)
        this.setLoadingIcon()
    }

    protected createRenderRoot(): HTMLElement | DocumentFragment {
        return this
    }

    private modifierStyle = () => {
        return modifiersToBem('textfield', [
            this.size,
            this.type,
            this.state,
            this.priority,
            this.error != undefined ? 'error' : null
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
        } else if (this.state == 'focus') {
            this.setAttribute('state', 'enabled')
        }
    }

    private setLoadingIcon = () => {
        if (this.loading) {
            return html`
                <gr-loader size="10" thickness="2"></gr-loader>`
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