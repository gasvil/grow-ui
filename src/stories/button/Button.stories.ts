import { Meta, StoryObj } from "@storybook/web-components";
import { ButtonProps, GrButton } from "./Button";

const meta = {
	title: "Grow/Button",
	tags: ["autodocs"],
	render: (args) => GrButton(args),
	argTypes: {
		label: {
			description: "Texto que se muestra en el botón",
			control: { type: 'text' }
		}
	}
} satisfies Meta<ButtonProps>

export default meta
type Story = StoryObj

export const Primary: Story = {

}