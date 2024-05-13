import {StoryObj} from "@storybook/web-components";
import {ButtonArgs, GrButtonTemplate, handleClick} from "./button.template";
import {html} from "lit";

export default {
    title: "Grow/Button",
    tags: ["autodocs"],
    render: (args: ButtonArgs) => GrButtonTemplate(args),
    parameters: {
        backgrounds: {default: 'light'}
    },
    argTypes: {
        refId: {
            description: "Define un id que será aplicado al botón contenido dentro de la etiqueta gr-button",
            name: "ref-id",
            type: {name: "string"},
            control: {type: "text"},
        },
        content: {
            description: "Contenido del botón, ingresa solo un texto o un contenido HTML más complejo.",
            type: {name: "HTML | string"},
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
            description: "Ícono que se mostrará al lado izquierdo del contenido del botón. Si está usando una tipografía de fuentes, solo debe agregar la clase del ícono que desea mostrar. Si usa imágenes como íconos usar el contenido personalizado.",
            name: "leading-icon",
            type: {name: "string"},
            control: {type: "text"}
        },
        trailingIcon: {
            description: "Ícono que se mostrará al lado derecho del contenido del botón. Si está usando una tipografía de fuentes, solo debe agregar la clase del ícono que desea mostrar. Si usa imágenes como íconos usar el contenido personalizado.",
            name: "trailing-icon",
            type: {name: "string"},
            control: {type: "text"}
        },
        href: {
            description: "Url a donde se desea navegar",
            type: {name: "URL"},
            control: {type: "text"}
        },
        target: {
            description: "Tipo de apertura de la url ingresada.",
            type: {name: "_blank | _self | _parent | _top"},
            control: {type: "select"},
            options: ['_blank', '_self', '_parent', '_top'],
            table: {
                "defaultValue": {summary: "_self"}
            }
        },
        onClick: {
            description: "Función a ejecutar al dar click sobre el botón.",
            name: "gr-click",
            type: {name: "((event: Event) => void)"},
            control: {type: null},
        }
    },
}

export let Default: StoryObj;
Default = {
    args: {
        content: "Default button",
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

export let Icons: StoryObj
Icons = {
    render: (args) => html`
        ${GrButtonTemplate({content: 'Leading icon button', leadingIcon: 'fa-solid fa-star', ...args})}
        ${GrButtonTemplate({content: 'Leading icon button', trailingIcon: 'fa-solid fa-star', ...args})}
        ${GrButtonTemplate({leadingIcon: 'fa-solid fa-star', ...args})}
    `
}

export let Anchors: StoryObj
Anchors = {
    render: (args) => html`
        ${GrButtonTemplate({content: 'Anchor button', href: 'https://www.google.com', target: '_blank', ...args})}
    `
}

export let Click: StoryObj
Click = {
    args: {
        refId: 'gr-button-click',
        onClick: handleClick
    },
    render: (args) => html`
        ${GrButtonTemplate({content: 'Click to action', ...args})}
        <script type="text/javascript">
            const button = document.querySelector('#gr-button-click')
            button.addEventListener('gr-click', () => {
                alert("Click from grow button")
            })
        </script>
    `
}