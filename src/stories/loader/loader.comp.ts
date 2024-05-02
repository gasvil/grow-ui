import { html } from "lit"
import "../../components/loader/loader"

export interface LoaderProps {
  priority?: string,
  negative?: boolean
}

export const GrLoader = (props: LoaderProps) => {
  return html`
    <gr-loader
      priority = ${props.priority ?? "primary"}
      ?negative = ${props.negative}
    ></gr-loader>
  `
}