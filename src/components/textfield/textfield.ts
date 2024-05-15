import {html, LitElement} from "lit";
import {customElement, property} from "lit/decorators.js";
import {modifiersToBem} from "../../commons/scripts/functions.ts";
import "./textfield.css"

export type TextfieldType = 'outline' | 'filled' | 'underline'
export type TextfieldPlaceholderPosition = 'inside' | 'outside' | 'overline'

@customElement('gr-textfield')
export class GrTextfield extends LitElement {

    @property({attribute: 'ref-id'})
    refId?: string

    @property()
    label?: string

    @property()
    type?: TextfieldType = 'outline'

    @property()
    placeholder?: String

    @property()
    placeholderPosition?: TextfieldPlaceholderPosition = 'outside'

    render() {
        return html`
            <label
                    class="${this.modifierStyle()}"
            >
                <input type="text" class="gr-textfield__input">
            </label>
        `
    }

    protected createRenderRoot(): HTMLElement | DocumentFragment {
        return this;
    }

    private modifierStyle = () => {
        return modifiersToBem('textfield', [])
    }

}

declare global {
    interface HTMLElementTagNameMap {
        'gr-textfield': GrTextfield
    }
}