import {GrTextfieldTemplate, TextfieldArgs} from "./textfield.template.ts";
import {StoryObj} from "@storybook/web-components";
import "@components/textfield/textfield"

export default {
    title: "Grow/Textfield",
    tags: ["autodocs"],
    render: (args: TextfieldArgs) => GrTextfieldTemplate(args),
    parameters: {
        backgrounds: {default: "light"}
    },
    argTypes: {
        refId: {
            description: "Define un id que será aplicado al textfield contenido dentro de la etiqueta gr-textfield",
            name: "ref-id",
            type: {name: "string"},
            control: {type: "text"},
        },
        label: {
            description: "Texto que se mostrará en la parte superior de la caja de texto para indicar el tipo de dato que se espera.",
            type: {name: "string"},
            control: {type: "text"},
        },
        size: {
            description: "Tamaño del textfield",
            type: {name: "small | medium, large"},
            control: {type: "select"},
            options: ['small', 'medium', 'large'],
            table: {
                defaultValue: {summary: "medium"}
            }
        },
        type: {
            description: "Estilo del contenedor del textfield",
            type: {name: "outline | outline-filled | filled | underline | underline-filled"},
            control: {type: 'select'},
            options: ['outline', 'outline-filled', 'filled', 'underline', 'underline-filled'],
            table: {
                defaultValue: {summary: "outline"}
            }
        },
        state: {
            description: "Estado actual del textfield.",
            type: {name: "enabled | disabled | focus"},
            control: {type: "select"},
            options: ['enabled', 'disabled', 'focus'],
            table: {
                defaultValue: {summary: "enabled"}
            }
        },
        priority: {
            description: "Color del textfield en base a su prioridad",
            type: {name: "primary | secondary | tertiary"},
            control: {type: "select"},
            options: ['primary', 'secondary', 'tertiary'],
            table: {
                defaultValue: {summary: "primary"}
            }
        },
        placeholder: {
            description: "Texto que se muestra dentro del campo de texto cuando no tiene contenido.",
            type: {name: "string"},
            control: {type: "text"},
        },
        placeholderPosition: {
            description: "Lugar al que se moverá el placeholder cuando se active el foco del textfield. Si la propiedad no se define el texto no se animará y solo se ocultará al ingresar el texto.",
            name: "placeholder-position",
            type: {name: "inside | outside | overline"},
            control: {type: "select"},
            options: ['inside', 'outside', 'overline'],
        },
        loading: {
            description: "Indica un estado de carga mostrando un icono al lado derecho del textfield.",
            type: {name: "boolean"},
            control: {type: "boolean"},
            table: {
                defaultValue: {summary: true}
            }
        },
        error: {
            description: "Texto que acompaña al cuadro de texto cuando ocurra algún error. Se acompaña de estilo asociado al error. Si no se ingresa un texto solo se muestra el estilo.",
            type: {name: "string"},
            control: {type: "text"}
        }
    }
}

export let Default: StoryObj
Default = {
    args: {
        label: "Default label",
        placeholder: "Custom placeholder",
        placeholderPosition: "inside"
    }
}