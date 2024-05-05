import { LitElement, html, unsafeCSS } from "lit";
import { customElement, property } from "lit/decorators.js";
import styles from "./loader.css?inline"
import global from "@commons/styles/global.css?inline"
import { modifiersToBem } from "../../commons/scripts/functions";

export type LoaderPriority = 'primary' | 'secondary' | 'tertiary'

@customElement('gr-loader')
export class GrLoader extends LitElement {

  static styles = [unsafeCSS(global), unsafeCSS(styles)]

  @property({type: Number})
  size: Number | undefined

  @property({type: Number})
  thickness: Number | undefined

  @property()
  priority: LoaderPriority = 'primary'

  @property({type: Boolean})
  negative: boolean | undefined = false

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
      this.negative ? 'negative' : ''
    ])
  }

  render() {
    return html`
      <div class="${this.modifierStyle()}">
        <div class="gr-loader__indicator" style="${this.customStyle()}"></div>
      </div>
    `
  }

}

declare global {
  interface HTMLElementTagNameMap {
    'gr-loader': GrLoader
  }
}