import {html, LitElement, PropertyValues, TemplateResult} from "lit";
import {customElement, property, query, state} from "lit/decorators.js";
import {getSiblings, slideToggle, slideUp} from "../../commons/scripts/functions.ts";
import "@components/textfield/textfield.comp"
import "@components/dropdown-option/dropdown-option.comp"
import "./dropdown.scss"
import {GrHtml} from "@growp/functions";

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
  size: DropdownSize = 'medium'

  @property()
  type: DropdownType = 'outlined'

  @property()
  state: DropdownState = 'enabled'

  @property()
  priority: DropdownPriority = 'primary'

  @property({attribute: 'placeholder-position'})
  placeholderPosition: DropdownPlaceholderPosition = 'inside'

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

  @state()
  private _optionSelected: {
    label?: string
  } = {}

  @query('.gr-textfield__icon--selectable')
  private _iconDown: HTMLElement | undefined

  protected createRenderRoot(): HTMLElement | DocumentFragment {
    this.style.display = "inline-block"
    return this
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
          value="${this._optionSelected.label}"
          icon-down="${this.iconDown ?? "gr-icon-down"}"
        ></gr-textfield>
        <ul class="gr-dropdown__list"></ul>
      </div>
    `
  }

  protected firstUpdated(_changedProperties: PropertyValues) {
    super.firstUpdated(_changedProperties);
    this.addItems()
    this.handleDropdown()
  }

  private addItems = (): void => {
    const list = this._ref?.querySelector('.gr-dropdown__list') as HTMLElement
    this.items?.split(',').forEach(it => {
      const optionTag = document.createElement('gr-dropdown-option')
      optionTag.setAttribute('label', it.trim())
      optionTag.addEventListener('gr-click', (e: CustomEvent) => {
        slideUp(list)
        this._iconDown?.style.removeProperty('transform')
        this._optionSelected = {
          label: e.detail.label
        }
        const siblings: HTMLElement[] = getSiblings(optionTag)
        siblings.forEach(it => {
          const option = it.querySelector('.gr-dropdown-option')
          option?.classList.remove('gr-dropdown-option--selected')
        })
        const chooseEvent = new CustomEvent('gr-choose', {
          detail: this._optionSelected
        })
        this.dispatchEvent(chooseEvent)
      })
      list?.append(optionTag)
    })
  }

  private modifierStyle = () => {
    const modifiers: string[] = [
      this.size,
      this.type,
      this.state,
      this.priority
    ]

    this.placeholderPosition && modifiers.push(`placeholder-${this.placeholderPosition}`)

    return GrHtml.createBemCss('gr-dropdown', modifiers)
  }

  private handleDropdown = () => {
    const grTextfield = this._ref?.querySelector('gr-textfield') as HTMLElement
    const inputSelectable = grTextfield?.querySelector('.gr-textfield__input') as HTMLInputElement
    const list = this._ref?.querySelector('.gr-dropdown__list') as HTMLElement
    grTextfield.addEventListener('gr-click', _ => {
      const opened = list?.classList.contains('gr-dropdown__list--opened')
      slideToggle(list)
      if (opened) {
        inputSelectable?.blur()
        console.log('opened')
        this._iconDown?.style.removeProperty('transform')
      } else {
        console.log('not opened')
        this._iconDown && (this._iconDown.style.transform = "rotate(180deg)")
      }
    })

    document.addEventListener('click', e => {
      const t = e.target as HTMLElement
      if (!t.closest('.gr-textfield__container') && !t.closest('.gr-dropdown__list')) {
        slideUp(list)
        this._iconDown?.style.removeProperty('transform')
      }
    })
  }

}

declare global {
  interface HTMLElementTagNameMap {
    'gr-dropdown': GrDropdown
  }
}