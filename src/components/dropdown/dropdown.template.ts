import "@components/dropdown/dropdown.comp"
import {
  DropdownPlaceholderPosition,
  DropdownPriority,
  DropdownSize,
  DropdownState,
  DropdownType
} from "./dropdown.comp.ts";

export interface DropdownArgs {
  refId?: string
  size?: DropdownSize
  type?: DropdownType
  state?: DropdownState
  priority?: DropdownPriority
  placeholderPosition?: DropdownPlaceholderPosition
  placeholder?: string
  label?: string
  iconDown?: string
}

export const GrDropdownTemplate = (args: DropdownArgs) => {
  const grDropdown = document.createElement('gr-dropdown')

  args.refId && grDropdown.setAttribute('ref-id', args.refId)
  args.size && grDropdown.setAttribute('size', args.size)
  args.type && grDropdown.setAttribute('type', args.type)
  args.state && grDropdown.setAttribute('state', args.state)
  args.priority && grDropdown.setAttribute('priority', args.priority)
  args.placeholderPosition && grDropdown.setAttribute('placeholder-position', args.placeholderPosition)
  args.placeholder && grDropdown.setAttribute('placeholder', args.placeholder)
  args.label && grDropdown.setAttribute('label', args.label)

  return grDropdown
}