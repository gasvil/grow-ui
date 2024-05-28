import {StoryObj} from "@storybook/web-components";
import {GrLoaderTemplate, LoaderProps} from "./loader.template";

export default {
    title: "Grow/Loader",
    tags: ["autodocs"],
    render: (args: LoaderProps) => GrLoaderTemplate(args),
    parameters: {
        backgrounds: {default: 'light'}
    },
    argTypes: {
        size: {
            description: "Tamaño del loader",
            type: {name: "number"},
            control: {type: "number"},
            table: {
                defaultValue: {summary: "20"}
            }
        },
        thickness: {
            description: "Ancho de línea del loader",
            type: {name: "number"},
            control: {type: "number"},
            table: {
                defaultValue: {summary: "3"}
            }
        },
        priority: {
            description: "Color del loader en base a su prioridad",
            type: {name: "primary | secondary | tertiary"},
            control: {type: "select"},
            options: ["primary", "secondary", "tertiary"],
            table: {
                defaultValue: {summary: "primary"}
            }
        },
        negative: {
            description: "Indica si el loader debe tener un colo neutral blanco",
            type: {name: "boolean"},
            control: {type: "boolean"},
            table: {
                defaultValue: {summary: false}
            }
        },
        gray: {
            description: "Muestra el loader en un estado inactivo/gris.",
            type: {name: "boolean"},
            control: {type: "boolean"},
            table: {
                defaultValue: {summary: false}
            }
        }
    }
}

export let Default: StoryObj
Default = {
    args: {
        negative: false
    }
}

export let Negative: StoryObj
Negative = {
    args: {
        negative: true
    },
    parameters: {
        backgrounds: {default: 'dark'}
    }
}

export let Gray: StoryObj
Gray = {
    args: {
        gray: true
    }
}