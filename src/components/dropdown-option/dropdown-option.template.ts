import {DropdownOptionSize} from "./dropdown-option.comp.ts";

export interface DropdownOptionArgs {
  refId?: string
  size?: DropdownOptionSize,
  label?: string
}

export const GrDropdownOptionTemplate = (args: DropdownOptionArgs) => {
  const grDropdownOption = document.createElement('gr-dropdown-option')

  args.refId && grDropdownOption.setAttribute('ref-id', args.refId)
  args.size && grDropdownOption.setAttribute('size', args.size)
  args.label && grDropdownOption.setAttribute('label', args.label)

  return grDropdownOption
}