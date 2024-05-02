import { html } from "lit"
import "../../components/button/button";

export interface ButtonProps {
  label?: string,
  type?: string,
  size?: string,
  priority?: string,
  state?: string
}

export const GrButton = (props: ButtonProps) => {
  return html`
    <gr-button
      label = ${props.label ?? "Button"}
      type = ${props.type ?? 'box'}
      size = ${props.size ?? 'medium'}
      priority = ${props.priority ?? 'primary'}
      state = ${props.state ?? 'enabled'}
    ></gr-button>
  `
}