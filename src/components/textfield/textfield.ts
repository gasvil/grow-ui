import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";

@customElement('gr-textfield')
export class GrTextfield extends LitElement {

  render() {
    return html`
      <input type="text">
    `
  }

}

declare global {
	interface HTMLElementTagNameMap {
		'gr-textfield': GrTextfield
	}
}