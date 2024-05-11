import "@components/button/button";

export interface ButtonArgs {
    type?: string,
    size?: string,
    priority?: string,
    state?: string,
    leadingIcon?: string,
    content?: string
}

export const GrButtonTemplate = (props: ButtonArgs) => {
    const grButton = document.createElement('gr-button')

    props.type && grButton.setAttribute('type', props.type)
    props.size && grButton.setAttribute('size', props.size)
    props.priority && grButton.setAttribute('priority', props.priority)
    props.state && grButton.setAttribute('state', props.state)
    props.leadingIcon && grButton.setAttribute('leading-icon', props.leadingIcon)

    props.content && (grButton.innerHTML = props.content)

    return grButton
}