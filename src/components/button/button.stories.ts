import {StoryObj} from "@storybook/web-components";
import {ButtonArgs, GrButton} from "./button.template";
import {html} from "lit";

export default {
    title: "Grow/Button",
    tags: ["autodocs"],
    render: (args: ButtonArgs) => GrButton(args),
    argTypes: {
        type: {
            description: "Estilo del contenedor del botón",
            type: {name: "box | outline | negative | inline",},
            control: {type: 'select'},
            options: ['box', 'outline', 'negative', 'inline'],
            table: {
                defaultValue: {summary: "box"},
            },
        },
        size: {
            description: "Tamaño del botón",
            type: {name: "small | medium | large"},
            control: {type: 'select'},
            options: ['small', 'medium', 'large'],
            table: {
                defaultValue: {summary: "medium"}
            },
        },
        priority: {
            description: "Color del botón en base a su prioridad",
            type: {name: "primary | secondary | tertiary"},
            control: {type: 'select'},
            options: ['primary', 'secondary', 'tertiary'],
            table: {
                defaultValue: {summary: "primary"}
            },
        },
        state: {
            description: "Estado del botón",
            type: {name: "enable | disable | loading"},
            control: {type: "select"},
            options: ['enabled', 'disabled', 'loading'],
            table: {
                defaultValue: {summary: "enabled"}
            }
        },
        content: {
            description: "Ingresa el contenido HTML para personalizar el botón. Acompañar el contenido de la propiedad custom-content en true",
            name: "slot",
            type: {name: "HTML"},
            control: {type: "text"}
        }
    }
}

export const Default: StoryObj = {
    args: {
        content: "Default button",
    }
}

export const Types: StoryObj = {
    parameters: {
        backgrounds: {default: 'dark'}
    },
    args: {},
    render: (args) => html`
        ${GrButton({type: 'box', ...args})}
        ${GrButton({type: 'outline', ...args})}
        ${GrButton({type: 'negative', ...args})}
        ${GrButton({type: 'inline', ...args})}
    `
}

export const Sizes: StoryObj = {
    render: (args) => html`
        ${GrButton({size: 'small', ...args})}
        ${GrButton({size: 'medium', ...args})}
        ${GrButton({size: 'large', ...args})}
    `
}

export const Priorities: StoryObj = {
    render: (args) => html`
        ${GrButton({priority: 'primary', ...args})}
        ${GrButton({priority: 'secondary', ...args})}
        ${GrButton({priority: 'tertiary', ...args})}
    `
}

export const States: StoryObj = {
    render: (args) => html`
        ${GrButton({state: 'enabled', ...args})}
        ${GrButton({state: 'disabled', ...args})}
<!--        ${GrButton({state: 'loading', ...args})}-->
    `
}