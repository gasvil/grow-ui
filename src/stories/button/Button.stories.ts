import { Meta, StoryObj } from "@storybook/web-components";
import { ButtonProps, GrButton } from "./Button";

const meta = {
	title: "Grow/Button",
	tags: ["autodocs"],
	render: (args: ButtonProps) => GrButton(args),
	argTypes: {
		label: {
			description: "Texto que se muestra en el botón",
			control: { type: 'text' }
		},
		type: {
			control: {
				type: 'select',
			},
			options: ['box', 'outline', 'negative', 'inline']
		},
		size: {
			control: { type: 'select' }
		},
		priority: {
			control: { type: 'select' }
		}
	}
} satisfies Meta<ButtonProps>

export default meta
type Story = StoryObj

export const Primary: Story = {

}