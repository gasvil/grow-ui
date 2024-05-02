import { StoryObj } from "@storybook/web-components";
import { ButtonProps, GrButton } from "./button.comp";

const meta = {
	title: "Grow/Button",
	tags: ["autodocs"],
	render: (args: ButtonProps) => GrButton(args),
	argTypes: {
		label: {
			description: "Texto que se muestra dentro del botón",
			control: { type: 'text' },
			type: {
				required: true,
				name: "string",
			}
		},
		type: {
			description: "Estilo del contenedor del botón",
			type: { name: "box | outline | negative | inline", },
			control: { type: 'select' },
			options: ['box', 'outline', 'negative', 'inline'],
			table: {
				defaultValue: { summary: "box" },
			},
		},
		size: {
			description: "Tamaño del botón",
			type: { name: "small | medium | large" },
			control: { type: 'select' },
			options: ['small', 'medium', 'large'],
			table: {
				defaultValue: { summary: "medium" }
			},
		},
		priority: {
			description: "Color del botón en base a su prioridad",
			type: { name: "primary | secondary | tertiary" },
			control: { type: 'select' },
			options: ['primary', 'secondary', 'tertiary'],
			table: {
				defaultValue: { summary: "primary" }
			},
		},
		state: {
			description: "Estado del botón",
			type: { name: "enable | disable | loading" },
			control: { type: "select" },
			options: ['enabled', 'disabled', 'loading'],
			table: {
				defaultValue: { summary: "enabled" }
			}
		}
	}
}

export default meta
type Story = StoryObj

export const Primary: Story = {

}