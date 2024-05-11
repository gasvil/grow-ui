import {StoryObj} from "@storybook/web-components";
import {ButtonArgs, GrButtonTemplate} from "./button.template";
import {html} from "lit";

export default {
    title: "Grow/Button",
    tags: ["autodocs"],
    render: (args: ButtonArgs) => GrButtonTemplate(args),
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
        leadingIcon: {
            description: "Ícono que se mostrará al lado izquierdo del contenido del botón. Si está usando una tipografía de fuentes, solo debe agregar la clase del ícono que desea mostrar.",
            name: "leading-icon",
            type: {name: "string"},
            control: {type: "text"}
        },
        content: {
            description: "Ingresa solo un texto o cualquier contenido HTML para personalizar el botón.",
            name: "slot",
            type: {name: "HTML"},
            control: {type: "text"}
        }
    }
}

export let Default: StoryObj;
Default = {
    args: {
        content: "Default button",
        leadingIcon: "fas fa-window-restore"
    }
};

export let Types: StoryObj;
Types = {
    parameters: {
        backgrounds: {default: 'dark'}
    },
    render: (args) => html`
        ${GrButtonTemplate({content: 'Box button', type: 'box', ...args})}
        ${GrButtonTemplate({content: 'Outline button', type: 'outline', ...args})}
        ${GrButtonTemplate({content: 'Negative button', type: 'negative', ...args})}
        ${GrButtonTemplate({content: 'Inline button', type: 'inline', ...args})}
    `
};

export let Sizes: StoryObj;
Sizes = {
    render: (args) => html`
        ${GrButtonTemplate({content: 'Small button', size: 'small', ...args})}
        ${GrButtonTemplate({content: 'Medium button', size: 'medium', ...args})}
        ${GrButtonTemplate({content: 'Large button', size: 'large', ...args})}
    `
};

export let Priorities: StoryObj;
Priorities = {
    render: (args) => html`
        ${GrButtonTemplate({content: 'Primary button', priority: 'primary', ...args})}
        ${GrButtonTemplate({content: 'Secondary button', priority: 'secondary', ...args})}
        ${GrButtonTemplate({content: 'Tertiary button', priority: 'tertiary', ...args})}
    `
};

export let States: StoryObj;
States = {
    render: (args) => html`
        ${GrButtonTemplate({content: 'Enabled button', state: 'enabled', ...args})}
        ${GrButtonTemplate({content: 'Disabled button', state: 'disabled', ...args})}
        ${GrButtonTemplate({content: 'Loading button', state: 'loading', ...args})}
    `
};