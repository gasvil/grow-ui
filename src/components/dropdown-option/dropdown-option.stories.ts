import {DropdownOptionArgs, GrDropdownOptionTemplate} from "./dropdown-option.template.ts";
import {StoryObj} from "@storybook/web-components";

export default {
  title: 'Grow/Dropdown option',
  tags: ['autodocs'],
  render: (args: DropdownOptionArgs) => GrDropdownOptionTemplate(args),
  parameters: {
    backgrounds: {default: "light"}
  }
}

export let Default: StoryObj
Default = {
  args: {}
}