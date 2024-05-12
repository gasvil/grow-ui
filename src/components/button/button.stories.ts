import {StoryObj} from "@storybook/web-components";
import {ButtonArgs, GrButtonTemplate} from "./button.template";
import {html} from "lit";

export default {
    title: "Grow/Button",
    tags: ["autodocs"],
    render: (args: ButtonArgs) => GrButtonTemplate(args),
    argTypes: {
        label: {
            description: "Texto que se muestra dentro del botón.",
            type: {name: "string"},
            control: {type: "text"},
        },
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
        }
    }
}

export let Default: StoryObj;
Default = {
    args: {
        label: "Default button",
        leadingIcon: "fas fa-window-restore"
    }
};

export let Types: StoryObj;
Types = {
    parameters: {
        backgrounds: {default: 'dark'}
    },
    render: (args) => html`
        ${GrButtonTemplate({label: 'Box button', type: 'box', ...args})}
        ${GrButtonTemplate({label: 'Outline button', type: 'outline', ...args})}
        ${GrButtonTemplate({label: 'Negative button', type: 'negative', ...args})}
        ${GrButtonTemplate({label: 'Inline button', type: 'inline', ...args})}
    `
};

export let Sizes: StoryObj;
Sizes = {
    render: (args) => html`
        ${GrButtonTemplate({label: 'Small button', size: 'small', ...args})}
        ${GrButtonTemplate({label: 'Medium button', size: 'medium', ...args})}
        ${GrButtonTemplate({label: 'Large button', size: 'large', ...args})}
    `
};

export let Priorities: StoryObj;
Priorities = {
    render: (args) => html`
        ${GrButtonTemplate({label: 'Primary button', priority: 'primary', ...args})}
        ${GrButtonTemplate({label: 'Secondary button', priority: 'secondary', ...args})}
        ${GrButtonTemplate({label: 'Tertiary button', priority: 'tertiary', ...args})}
    `
};

export let States: StoryObj;
States = {
    render: (args) => html`
        ${GrButtonTemplate({label: 'Enabled button', state: 'enabled', ...args})}
        ${GrButtonTemplate({label: 'Disabled button', state: 'disabled', ...args})}
        ${GrButtonTemplate({label: 'Loading button', state: 'loading', ...args})}
    `
};