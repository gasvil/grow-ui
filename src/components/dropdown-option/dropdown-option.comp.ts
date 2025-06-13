import { customElement, property } from "lit/decorators.js";
import { html, LitElement, TemplateResult } from "lit";
import "./dropdown-option.scss"
import { GrHtml } from "@growp/functions";

export type DropdownOptionSize = 'small' | 'medium' | 'large';

@customElement('gr-dropdown-option')
export class GrDropdownOption extends LitElement {

  @property({ attribute: 'ref-id' })
  refId?: string

  @property()
  size: DropdownOptionSize = 'medium'

  @property()
  label?: string

  protected createRenderRoot(): HTMLElement | DocumentFragment {
    this.style.display = "inline-block"
    return this
  }

  protected render(): TemplateResult {
    return html`
      <div
        class="${this.modifierStyle()}"
        @click="${this.handleClick}"
      >
        <span class="gr-dropdown-option__label">${this.label}</span>
      </div>
    `
  }

  private modifierStyle = () => {
    const modifiers: string[] = [this.size]
    return GrHtml.createBemCss('gr-dropdown-option', modifiers)
  }

  private handleClick = (e?: Event) => {
    const t = e?.target as HTMLElement
    t.classList.add('gr-dropdown-option--selected')
    const clickEvent = new CustomEvent('gr-click', {
      detail: {
        e,
        label: this.label
      }
    })
    this.dispatchEvent(clickEvent)
  }

}

declare global {
  interface HTMLElementTagNameMap {
    'gr-dropdown-option': GrDropdownOption
  }
}

declare global {
  interface HTMLElementEventMap {
    'gr-click': CustomEvent<{ message: string; value: number }>;
  }
}