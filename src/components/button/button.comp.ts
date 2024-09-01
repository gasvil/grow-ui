import {html, LitElement, PropertyValues, TemplateResult} from "lit";
import {customElement, property} from "lit/decorators.js";
import "@components/loader/loader.comp"
import './button.scss'
import {GrHtml} from "@growp/functions";

export type ButtonType = 'box' | 'outline' | 'negative' | 'inline'
export type ButtonSize = 'small' | 'medium' | 'large'
export type ButtonPriority = 'primary' | 'secondary' | 'tertiary'
export type ButtonState = 'enabled' | 'disabled' | 'loading'
export type ButtonAnchorType = '_blank' | '_self' | '_parent' | '_top'

@customElement('gr-button')
export class GrButton extends LitElement {

  @property({attribute: 'ref-id'})
  refId?: string

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

  @property()
  href?: string

  @property()
  target?: ButtonAnchorType = "_self"

  private buttonIcons: {
    leading?: TemplateResult,
    trailing?: TemplateResult
  } = {}

  constructor() {
    super()
    this.setIcons()
  }

  protected render(): TemplateResult {
    if (this.href) {
      return html`
        <a
          id="${this.refId}"
          href="${this.href}"
          target="${this.target}"
          class="${this.modifierStyle()}"
        >
          ${this.setContent()}
        </a>
      `
    } else {
      return html`
        <button
          id="${this.refId}"
          type="button"
          class="${this.modifierStyle()}"
          @click="${this.handleClick}"
        >
          ${this.setContent()}
        </button>
      `
    }
  }

  protected createRenderRoot(): HTMLElement | DocumentFragment {
    this.style.display = "inline-block"
    this.setWidth()
    return this
  }

  protected shouldUpdate(_changedProperties: PropertyValues): boolean {
    this.setLoadingButtonSize(_changedProperties)
    this.setIcons()
    return super.shouldUpdate(_changedProperties);
  }

  private setWidth = () => {
    const width = this.width ?? ""
    if (width == 'full') {
      this.style.display = "block"
    } else if (!isNaN(parseInt(width.toString()))) {
      this.style.display = "block"
      this.style.maxWidth = `${this.width}px`
    }
  }

  private modifierStyle = () => {
    const modifiers: string[] = [
      this.type,
      this.size,
      this.priority,
      this.state
    ]
    return GrHtml.createBemCss('gr-button', modifiers)
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
    this.leadingIcon && (this.buttonIcons.leading = html`<i class="gr-button__icon ${this.leadingIcon}"></i>`)
    this.trailingIcon && (this.buttonIcons.trailing = html`<i class="gr-button__icon ${this.trailingIcon}"></i>`)
  }

  private parseHTMLContent = () => {
    if (this.content) {
      return html`<span class="gr-button__content" .innerHTML="${this.content}"></span>`
    } else {
      return ''
    }
  }

  private setContent = () => {
    if (this.state == 'loading') {
      return html`
        <gr-loader negative size="15"></gr-loader>`
    } else {
      return html`
        ${this.buttonIcons.leading}
        ${this.parseHTMLContent()}
        ${this.buttonIcons.trailing}
      `
    }
  }

  private handleClick = (e: Event) => {
    const event = new CustomEvent('gr-click', e)
    this.dispatchEvent(event)
  }

}

declare global {
  interface HTMLElementTagNameMap {
    'gr-button': GrButton
  }
}