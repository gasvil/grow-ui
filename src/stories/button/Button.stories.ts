import { StoryObj } from "@storybook/web-components";
import { ButtonProps, GrButton } from "./button.comp";
import { html } from "lit";

const meta = {
	title: "Grow/Button",
	tags: ["autodocs"],
	render: (args: ButtonProps) => GrButton(args),
	argTypes: {
		label: {
			description: "Texto que se muestra dentro del botón",
			control: { type: 'text' },
			type: { name: "string" },
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
		},
		customContent: {
			description: "Reemplazará cualquier contenido para permitir el control total al integrador.",
			name: "custom-content",
			type: { name: "boolean" },
			control: { name: "boolean" },
			table: {
				defaultValue: { summary: false }
			}
		},
		content: {
			description: "Ingresa el contenido HTML para personalizar el botón. Acompañar el contenido de la propiedad custom-content en true",
			name: "slot",
			type: { name: "HTML" },
			control: { type: "text" }
		}
	}
}

export default meta

export const Default: StoryObj = {
	args: {
		label: "Button",
	}
}

export const Types: StoryObj = {
	parameters: {
    backgrounds: { default: 'dark' }
  },
	render: (args) => html`
		${GrButton({label: 'Box Button', type: 'box', ...args})}
		${GrButton({label: 'Outline Button', type: 'outline', ...args})}
		${GrButton({label: 'Negative Button', type: 'negative', ...args})}
		${GrButton({label: 'Inline Button', type: 'inline', ...args})}
	`
}

export const Sizes: StoryObj = {
	render: (args) => html`
		${GrButton({label: 'Small Button', size: 'small', ...args})}
		${GrButton({label: 'Medium Button', size: 'medium', ...args})}
		${GrButton({label: 'Large Button', size: 'large', ...args})}
	`
}

export const Priorities: StoryObj = {
	render: (args) => html`
		${GrButton({label: 'Primary Button', priority: 'primary', ...args})}
		${GrButton({label: 'Secondary Button', priority: 'secondary', ...args})}
		${GrButton({label: 'Tertiary Button', priority: 'tertiary', ...args})}
	`
}

export const States: StoryObj = {
	render: (args) => html`
		${GrButton({label: 'Enabled Button', state: 'enabled', ...args})}
		${GrButton({label: 'Disabled Button', state: 'disabled', ...args})}
		${GrButton({state: 'loading', ...args})}
	`
}

export const CustomContent: StoryObj = {
	args: {
		customContent: true,
		content: "<span>Custom</span> <span>content</span>"
	}
}