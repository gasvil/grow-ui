import "@components/button/button";

export interface ButtonArgs {
    refId?: string,
    content?: string
    type?: string,
    size?: string,
    priority?: string,
    state?: string,
    leadingIcon?: string,
    trailingIcon?: string,
    width?: string,
    href?: string
    target?: string,
}

export const GrButtonTemplate = (props: ButtonArgs) => {
    const grButton = document.createElement('gr-button')

    props.refId && grButton.setAttribute('ref-id', props.refId)
    props.content && grButton.setAttribute('content', props.content)
    props.type && grButton.setAttribute('type', props.type)
    props.size && grButton.setAttribute('size', props.size)
    props.priority && grButton.setAttribute('priority', props.priority)
    props.state && grButton.setAttribute('state', props.state)
    props.leadingIcon && grButton.setAttribute('leading-icon', props.leadingIcon)
    props.trailingIcon && grButton.setAttribute('trailing-icon', props.trailingIcon)
    props.width && grButton.setAttribute('width', props.width)
    props.href && grButton.setAttribute('href', props.href)
    props.target && grButton.setAttribute('target', props.target)

    return grButton
}