import {ButtonAnchorType, ButtonPriority, ButtonSize, ButtonState, ButtonType} from "./button.ts";

export interface ButtonArgs {
    refId?: string,
    content?: string
    type?: ButtonType,
    size?: ButtonSize,
    priority?: ButtonPriority,
    state?: ButtonState,
    leadingIcon?: string,
    trailingIcon?: string,
    width?: number | 'full',
    href?: string
    target?: ButtonAnchorType,
}

export const GrButtonTemplate = (args: ButtonArgs) => {
    const grButton = document.createElement('gr-button')

    args.refId && grButton.setAttribute('ref-id', args.refId)
    args.content && grButton.setAttribute('content', args.content)
    args.type && grButton.setAttribute('type', args.type)
    args.size && grButton.setAttribute('size', args.size)
    args.priority && grButton.setAttribute('priority', args.priority)
    args.state && grButton.setAttribute('state', args.state)
    args.leadingIcon && grButton.setAttribute('leading-icon', args.leadingIcon)
    args.trailingIcon && grButton.setAttribute('trailing-icon', args.trailingIcon)
    args.width && grButton.setAttribute('width', args.width.toString())
    args.href && grButton.setAttribute('href', args.href)
    args.target && grButton.setAttribute('target', args.target)

    return grButton
}