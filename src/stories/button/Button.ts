import { html } from "lit"
import "../../components/button/button";

export interface ButtonProps {
  label?: string
}

export const GrButton = (props: ButtonProps) => {
  return html`
    <gr-button
      label = ${props.label ?? "Button"}
    ></gr-button>
  `
}