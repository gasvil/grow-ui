import {
  TextfieldInputType,
  TextfieldPlaceholderPosition,
  TextfieldPriority,
  TextfieldSize,
  TextfieldState,
  TextfieldType
} from "./textfield.comp.ts";
import "@components/textfield/textfield.comp"

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
  width?: number | 'full'
  inputType?: TextfieldInputType
  passwordIconOn?: string
  passwordIconOff?: string
  regex?: string
  maxLength?: number
  readonly?: boolean
  selectable?: boolean
  error?: string
}

export const GrTextfieldTemplate = (args: TextfieldArgs) => {
  const grTextfield = document.createElement('gr-textfield')

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
  args.width && grTextfield.setAttribute('width', args.width.toString())
  args.inputType && grTextfield.setAttribute('input-type', args.inputType)
  args.passwordIconOn && grTextfield.setAttribute('password-icon-on', args.passwordIconOn)
  args.passwordIconOff && grTextfield.setAttribute('password-icon-off', args.passwordIconOff)
  args.regex && grTextfield.setAttribute('regex', args.regex)
  args.maxLength && grTextfield.setAttribute('max-length', args.maxLength.toString())
  args.selectable && grTextfield.setAttribute('selectable', '')
  args.readonly && grTextfield.setAttribute('readonly', '')

  if (args.error != null) grTextfield.setAttribute('error', args.error ?? "")

  return grTextfield
}