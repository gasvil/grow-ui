import {html, LitElement, PropertyValues, TemplateResult} from "lit";
import {customElement, property, query} from "lit/decorators.js";
import {modifiersToBem} from "../../commons/scripts/functions.ts";
import "@components/textfield/textfield.comp"
import "./dropdown.scss"

export type DropdownSize = 'small' | 'medium' | 'large'
export type DropdownType = 'outlined' | 'outlined-filled' | 'filled' | 'underlined' | 'underlined-filled'
export type DropdownState = 'enabled' | 'disabled' | 'focus'
export type DropdownPriority = 'primary' | 'secondary' | 'tertiary'
export type DropdownPlaceholderPosition = 'inside' | 'outside' | 'overline'

@customElement('gr-dropdown')
export class GrDropdown extends LitElement {

  @property({attribute: 'ref-id'})
  refId?: string

  @property()
  size?: DropdownSize = 'medium'

  @property()
  type?: DropdownType = 'outlined'

  @property()
  state?: DropdownState = 'enabled'

  @property()
  priority?: DropdownPriority = 'primary'

  @property({attribute: 'placeholder-position'})
  placeholderPosition?: DropdownPlaceholderPosition = 'inside'

  @property()
  placeholder?: string

  @property()
  label?: string

  @property({attribute: 'icon-down'})
  iconDown?: string

  @property()
  items?: string

  @query(".gr-dropdown")
  private _ref: HTMLDivElement | undefined

  protected createRenderRoot(): HTMLElement | DocumentFragment {
    this.style.display = "inline-block"
    return this
  }

  protected shouldUpdate(_changedProperties: PropertyValues): boolean {
    this.addItems()
    return super.shouldUpdate(_changedProperties);
  }

  protected render(): TemplateResult {
    return html`
      <div class="${this.modifierStyle()}">
        <gr-textfield
          label="${this.label}"
          placeholder="${this.placeholder}"
          type="${this.type}"
          size="${this.size}"
          state="${this.state}"
          priority="${this.priority}"
          placeholder-position="${this.placeholderPosition}"
          selectable
          icon-down="${this.iconDown ?? "gr-icon-down"}"
        ></gr-textfield>
        <ul class="gr-dropdown__list"></ul>
      </div>
    `
  }

  private addItems = (): void => {
    const list = this._ref?.querySelector('.gr-dropdown__list')
    this.items?.split(',').forEach(it => {
      console.log(it)
    })
  }

  private modifierStyle = () => {
    return modifiersToBem('dropdown', [
      this.size,
      this.type,
      this.state,
      this.priority,
      this.placeholderPosition && this.placeholder ? 'placeholder-' + this.placeholderPosition : null,
    ])
  }

}

declare global {
  interface HTMLElementTagNameMap {
    'gr-dropdown': GrDropdown
  }
}