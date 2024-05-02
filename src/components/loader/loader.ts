import { LitElement, html, unsafeCSS } from "lit";
import { customElement, property } from "lit/decorators.js";
import styles from "./loader.css?inline"
import { modifiersToBem } from "../../common/scripts/functions";

export type LoaderPriority = 'primary' | 'secondary' | 'tertiary'

@customElement('gr-loader')
export class GrLoader extends LitElement {

  static styles = [unsafeCSS(styles)]

  @property()
  priority?: LoaderPriority = 'primary'

  @property({type: Boolean})
  negative?: boolean = false

  private modifierStyle = () => {
    return modifiersToBem('loader', [
      this.priority,
      this.negative ? 'negative' : ''
    ])
  }

  render() {
    return html`
      <div class="${this.modifierStyle()}">
        <div class="gr-loader__indicator"></div>
      </div>
    `
  }

}

declare global {
  interface HTMLElementTagNameMap {
    'gr-loader': GrLoader
  }
}