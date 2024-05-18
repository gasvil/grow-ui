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
    size?: TextfieldSize
    type?: TextfieldType
    state?: TextfieldState
    priority?: TextfieldPriority
    placeholder?: string
    placeholderPosition?: TextfieldPlaceholderPosition
    loading?: boolean
    error?: string
}

export const GrTextfieldTemplate = (args: TextfieldArgs) => {
    const grTextfield = document.createElement('gr-textfield')

    args.refId && grTextfield.setAttribute('ref-id', args.refId)
    args.label && grTextfield.setAttribute('label', args.label)
    args.size && grTextfield.setAttribute('size', args.size)
    args.type && grTextfield.setAttribute('type', args.type)
    args.state && grTextfield.setAttribute('state', args.state)
    args.priority && grTextfield.setAttribute('priority', args.priority)
    args.placeholder && grTextfield.setAttribute('placeholder', args.placeholder)
    args.placeholderPosition && grTextfield.setAttribute('placeholder-position', args.placeholderPosition)
    args.loading && grTextfield.setAttribute('loading', '')
    args.error && grTextfield.setAttribute('error', args.error)

    return grTextfield
}