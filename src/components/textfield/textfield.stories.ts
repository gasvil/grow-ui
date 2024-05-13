import {GrTextfieldTemplate, TextfieldArgs} from "./textfield.template.ts";
import {StoryObj} from "@storybook/web-components";
import "@components/textfield/textfield"

export default {
    title: "Grow/Textfield",
    tags: ["autodocs"],
    render: (args: TextfieldArgs) => GrTextfieldTemplate(args),
    parameters: {
        backgrounds: {default: "light"}
    }
}

export let Default: StoryObj
Default = {}