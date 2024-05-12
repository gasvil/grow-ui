import "@components/button/button";

export interface ButtonArgs {
    content?: string
    type?: string,
    size?: string,
    priority?: string,
    state?: string,
    leadingIcon?: string,
    trailingIcon?: string,
    width?: number | 'full'
}

export const GrButtonTemplate = (props: ButtonArgs) => {
    const grButton = document.createElement('gr-button')

    props.content && grButton.setAttribute('content', props.content)
    props.type && grButton.setAttribute('type', props.type)
    props.size && grButton.setAttribute('size', props.size)
    props.priority && grButton.setAttribute('priority', props.priority)
    props.state && grButton.setAttribute('state', props.state)
    props.leadingIcon && grButton.setAttribute('leading-icon', props.leadingIcon)
    props.trailingIcon && grButton.setAttribute('trailing-icon', props.trailingIcon)
    props.width && grButton.setAttribute('width', props.width.toString())

    return grButton
}