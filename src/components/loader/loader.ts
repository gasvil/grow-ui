import {html, LitElement, TemplateResult} from "lit";
import {customElement, property} from "lit/decorators.js";
import {modifiersToBem} from "../../commons/scripts/functions";
import "./loader.scss"

export type LoaderPriority = 'primary' | 'secondary' | 'tertiary'

@customElement('gr-loader')
export class GrLoader extends LitElement {

    @property({type: Number})
    size: Number | undefined

    @property({type: Number})
    thickness: Number | undefined

    @property()
    priority: LoaderPriority = 'primary'

    @property({type: Boolean})
    negative: boolean | undefined = false

    @property({type: Boolean})
    gray: boolean = false

    protected render(): TemplateResult {
        return html`
            <div class="${this.modifierStyle()}">
                <div class="gr-loader__indicator" style="${this.customStyle()}"></div>
            </div>
        `
    }

    protected createRenderRoot(): HTMLElement | DocumentFragment {
        this.style.display = 'inline-block'
        return this
    }

    private customStyle = (): string => {
        const styles = []

        if (this.size) {
            styles.push(`height: ${this.size}px;`)
            styles.push(`width: ${this.size}px;`)
        }

        if (this.thickness) {
            styles.push(`border-width: ${this.thickness}px`)
        }

        return styles.join(' ')
    }

    private modifierStyle = () => {
        return modifiersToBem('loader', [
            this.priority,
            this.negative ? 'negative' : null,
            this.gray ? 'gray' : null
        ])
    }

}

declare global {
    interface HTMLElementTagNameMap {
        'gr-loader': GrLoader
    }
}