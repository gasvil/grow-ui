import "@components/button/button";
import { html } from "lit";

export interface ButtonProps {
  label?: string,
  type?: string,
  size?: string,
  priority?: string,
  state?: string,
  customContent?: boolean
  content?: string
}

// export const GrButton = (props: ButtonProps) => {
//   const grButton = document.createElement('gr-button')
  
//   props.label && grButton.setAttribute('label', props.label)
//   props.type && grButton.setAttribute('type', props.type)
//   props.size && grButton.setAttribute('size', props.size)
//   props.priority && grButton.setAttribute('priority', props.priority)
//   props.state && grButton.setAttribute('state', props.state)
//   props.customContent === true && grButton.setAttribute('custom-content', '')

//   props.content && (grButton.innerHTML = props.content)

//   return grButton
// }

export const GrButton = (props: ButtonProps) => {
  console.log({props: props.state != null})
  return html`
    <gr-button
      label=${props.label}
      state=${props.state}
    >

    </gr-button>
  `
}