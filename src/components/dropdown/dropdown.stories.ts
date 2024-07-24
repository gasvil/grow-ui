import {DropdownArgs, GrDropdownTemplate} from "./dropdown.template.ts";
import {StoryObj} from "@storybook/web-components";

export default {
  title: 'Grow/Dropdown',
  tags: ['autodocs'],
  render: (args: DropdownArgs) => GrDropdownTemplate(args),
  parameters: {
    backgrounds: {default: "light"}
  },
  argTypes: {
    refId: {
      description: "Define un id que será aplicado al campo seleccionable contenido dentro de la etiqueta gr-textfield",
      name: "ref-id",
      type: {name: "string"},
      control: {type: "text"},
    },
    label: {
      description: "Texto que se mostrará en la parte superior del campo seleccionable para indicar el tipo de dato que se va a elegir.",
      type: {name: "string"},
      control: {type: "text"},
    },
    size: {
      description: "Tamaño del campo de texto",
      type: {name: "small | medium, large"},
      control: {type: "select"},
      options: ['small', 'medium', 'large'],
      table: {
        defaultValue: {summary: "medium"}
      }
    },
    type: {
      description: "Estilo del contenedor del campo seleccionable.",
      type: {name: "outline | outline-filled | filled | underline | underline-filled"},
      control: {type: 'select'},
      options: ['outline', 'outline-filled', 'filled', 'underline', 'underline-filled'],
      table: {
        defaultValue: {summary: "outline"}
      }
    },
    state: {
      description: "Estado actual del campo seleccionable.",
      type: {name: "enabled | disabled | focus"},
      control: {type: "select"},
      options: ['enabled', 'disabled', 'focus'],
      table: {
        defaultValue: {summary: "enabled"}
      }
    },
    priority: {
      description: "Color del campo seleccionable en base a su prioridad",
      type: {name: "primary | secondary | tertiary"},
      control: {type: "select"},
      options: ['primary', 'secondary', 'tertiary'],
      table: {
        defaultValue: {summary: "primary"}
      }
    },
    placeholder: {
      description: "Texto que se muestra dentro del campo seleccionable cuando no tiene contenido.",
      type: {name: "string"},
      control: {type: "text"},
    },
    placeholderPosition: {
      description: "Lugar al que se moverá el placeholder cuando se active el foco del campo seleccionable. Si la propiedad no se define el texto no se animará y solo se ocultará al ingresar el texto.",
      name: "placeholder-position",
      type: {name: "inside | outside | overline"},
      control: {type: "select"},
      options: ['inside', 'outside', 'overline'],
    },
  }
}

export let Default: StoryObj
Default = {
  args: {
    label: 'Dropdown'
  }
}