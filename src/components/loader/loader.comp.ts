import {html, LitElement, TemplateResult} from "lit";
import {customElement, property} from "lit/decorators.js";
import "./loader.scss"
import {GrHtml} from "@growp/functions";

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

  @property({type: Boolean})
  error: boolean = false

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
    const modifiers: string[] = [this.priority]

    this.negative && modifiers.push('negative')
    this.gray && modifiers.push('gray')
    this.error && modifiers.push('error')

    return GrHtml.createBemCss('gr-loader', modifiers)
  }

}

declare global {
  interface HTMLElementTagNameMap {
    'gr-loader': GrLoader
  }
}