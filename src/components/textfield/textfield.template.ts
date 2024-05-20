import {
    TextfieldPlaceholderPosition,
    TextfieldPriority,
    TextfieldSize,
    TextfieldState,
    TextfieldType
} from "./textfield.ts";

export interface TextfieldArgs {
    refId?: string
    label?: string
    value?: string
    size?: TextfieldSize
    type?: TextfieldType
    state?: TextfieldState
    priority?: TextfieldPriority
    placeholder?: string
    placeholderPosition?: TextfieldPlaceholderPosition
    loading?: boolean
    leadingIcon?: string
    trailingIcon?: string
    error?: string
}

export const GrTextfieldTemplate = (args: TextfieldArgs) => {
    const grTextfield = document.createElement('gr-textfield')
    console.log(args.error)

    args.refId && grTextfield.setAttribute('ref-id', args.refId)
    args.label && grTextfield.setAttribute('label', args.label)
    args.value && grTextfield.setAttribute('value', args.value)
    args.size && grTextfield.setAttribute('size', args.size)
    args.type && grTextfield.setAttribute('type', args.type)
    args.state && grTextfield.setAttribute('state', args.state)
    args.priority && grTextfield.setAttribute('priority', args.priority)
    args.placeholder && grTextfield.setAttribute('placeholder', args.placeholder)
    args.placeholderPosition && grTextfield.setAttribute('placeholder-position', args.placeholderPosition)
    args.loading && grTextfield.setAttribute('loading', '')
    args.leadingIcon && grTextfield.setAttribute('leading-icon', args.leadingIcon)
    args.trailingIcon && grTextfield.setAttribute('trailing-icon', args.trailingIcon)
    if (args.error != null) grTextfield.setAttribute('error', args.error ?? "")

    return grTextfield
}