import {GrTextfieldTemplate, TextfieldArgs} from "./textfield.template.ts";
import {StoryObj} from "@storybook/web-components";
import {html} from "lit";

export default {
  title: "Grow/Textfield",
  tags: ["autodocs"],
  render: (args: TextfieldArgs) => GrTextfieldTemplate(args),
  parameters: {
    backgrounds: {default: "light"}
  },
  argTypes: {
    refId: {
      description: "Define un id que será aplicado al campo de texto contenido dentro de la etiqueta gr-textfield",
      name: "ref-id",
      type: {name: "string"},
      control: {type: "text"},
    },
    label: {
      description: "Texto que se mostrará en la parte superior de la caja de texto para indicar el tipo de dato que se espera.",
      type: {name: "string"},
      control: {type: "text"},
    },
    value: {
      description: "Texto del contenido del campo de texto.",
      type: {name: "string"},
      control: {type: "text"},
    },
    size: {
      description: "Tamaño del campo de texto",
      type: {name: "small | medium | large"},
      control: {type: "select"},
      options: ['small', 'medium', 'large'],
      table: {
        defaultValue: {summary: "medium"}
      }
    },
    type: {
      description: "Estilo del contenedor del campo de texto",
      type: {name: "outlined | outlined-filled | filled | underlined | underlined-filled"},
      control: {type: 'select'},
      options: ['outlined', 'outlined-filled', 'filled', 'underlined', 'underlined-filled'],
      table: {
        defaultValue: {summary: "outlined"}
      }
    },
    state: {
      description: "Estado actual del campo de texto.",
      type: {name: "enabled | disabled | focus"},
      control: {type: "select"},
      options: ['enabled', 'disabled', 'focus'],
      table: {
        defaultValue: {summary: "enabled"}
      }
    },
    priority: {
      description: "Color del campo de texto en base a su prioridad",
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
      description: "Lugar al que se moverá el placeholder cuando se active el foco del campo de texto. Si la propiedad no se define el texto no se animará y solo se ocultará al ingresar el texto.",
      name: "placeholder-position",
      type: {name: "inside | outside | overline"},
      control: {type: "select"},
      options: ['inside', 'outside', 'overline'],
    },
    loading: {
      description: "Indica un estado de carga mostrando un icono al lado derecho del campo de texto.",
      type: {name: "boolean"},
      control: {type: "boolean"},
      table: {
        defaultValue: {summary: false}
      }
    },
    leadingIcon: {
      description: "Ícono que se mostrará al lado izquierdo del campo de texto. Si está usando una tipografía de fuentes, solo debe agregar la clase del ícono que desea mostrar.",
      name: "leading-icon",
      type: {name: "string"},
      control: {type: "text"},
    },
    trailingIcon: {
      description: "Ícono que se mostrará al lado derecho del campo de texto. Si está usando una tipografía de fuentes, solo debe agregar la clase del ícono que desea mostrar.",
      name: "trailing-icon",
      type: {name: "string"},
      control: {type: "text"},
    },
    width: {
      description: "Define un ancho específico del campo de texto. Puede ser un valor en px específico o el máximo ancho disponible.",
      type: {name: "number | full"},
      control: {type: "text"},
    },
    inputType: {
      description: "Define un tipo de dato predeterminado que aceptara el campo de texto para su validación mediante expresiones regulares. Puedes acompañar el tipo con una expresión regular personalizada en el atributo regex. Para el tipo password se usa una validación de mínimo 8 caracteres, una minúscula, una mayúscula y un dígito numérico.",
      name: 'input-type',
      type: {name: "text | number | email | password | password-eye | alphanumeric | url"},
      control: {type: "select"},
      options: ['text', 'number', 'email', 'password', 'password-eye', 'alphanumeric', 'url'],
    },
    passwordIconOn: {
      description: "Define un ícono para el botón de ojo abierto que muestra u oculta la contraseña. Si no se define se usará un ícono por defecto.",
      name: "password-icon-on",
      type: {name: "string"},
      control: {type: "text"},
    },
    passwordIconOff: {
      description: "Define un ícono para el botón de ojo cerrado que muestra u oculta la contraseña. Si no se define se usará un ícono por defecto.",
      name: "password-icon-off",
      type: {name: "string"},
      control: {type: "text"},
    },
    regex: {
      description: "Define una expresión regular que reemplazará a los valores por defecto del campo input-type.",
      type: {name: "RegExp"},
      control: {type: "text"},
    },
    maxLength: {
      description: "Define un tamaño máximo para el contenido del campo de texto.",
      name: "max-length",
      type: {name: "number"},
      control: {type: "number"}
    },
    readonly: {
      description: "Define si el campo de texto será de solo lectura.",
      type: {name: "boolean"},
      control: {type: "boolean"},
      table: {
        defaultValue: {summary: false}
      }
    },
    error: {
      description: "Texto que acompaña al campo de texto cuando ocurra algún error. Se acompaña de estilo asociado al error. Si no se ingresa un texto solo se muestra el estilo.",
      type: {name: "string"},
      control: {type: "text"}
    }
  }
}

export let Default: StoryObj
Default = {
  args: {
    placeholder: 'Default textfield',
    loading: true,
    trailingIcon: 'fa-solid fa-up-down-left-right',
    inputType: 'password',
    passwordIconOn: 'fa-solid fa-eye',
    passwordIconOff: 'fa-solid fa-eye-slash',
    selectable: true
  }
}

export let Sizes: StoryObj
Sizes = {
  render: (args) => html`
    ${GrTextfieldTemplate({placeholder: 'Small textfield', size: 'small', ...args})}
    ${GrTextfieldTemplate({placeholder: 'Medium textfield', size: 'medium', ...args})}
    ${GrTextfieldTemplate({placeholder: 'Large textfield', size: 'large', ...args})}
  `
}

export let Types: StoryObj
Types = {
  render: (args) => html`
    ${GrTextfieldTemplate({placeholder: 'Outline textfield', width: 300, type: 'outlined', ...args})}
    <br>
    ${GrTextfieldTemplate({placeholder: 'Outline filled textfield', width: 300, type: 'outlined-filled', ...args})}
    <br>
    ${GrTextfieldTemplate({placeholder: 'Filled textfield', width: 300, type: 'filled', ...args})}
    <br>
    ${GrTextfieldTemplate({placeholder: 'Underline textfield', width: 300, type: 'underlined', ...args})}
    <br>
    ${GrTextfieldTemplate({
      placeholder: 'Underline filled textfield',
      width: 300,
      type: 'underlined-filled', ...args
    })}
  `
}

export let States: StoryObj
States = {
  render: (args) => html`
    ${GrTextfieldTemplate({placeholder: 'Enabled textfield', state: 'enabled', ...args})}
    ${GrTextfieldTemplate({placeholder: 'Disabled textfield', state: 'disabled', ...args})}
  `
}

export let Priority: StoryObj
Priority = {
  render: (args) => html`
    ${GrTextfieldTemplate({placeholder: 'Primary textfield', priority: 'primary', ...args})}
    ${GrTextfieldTemplate({placeholder: 'Secondary textfield', priority: 'secondary', ...args})}
    ${GrTextfieldTemplate({placeholder: 'Tertiary textfield', priority: 'tertiary', ...args})}
  `
}

export let PlaceholderPosition: StoryObj
PlaceholderPosition = {
  render: (args) => html`
    ${GrTextfieldTemplate({
      placeholder: 'Placeholder outside textfield',
      width: 300,
      placeholderPosition: 'outside', ...args
    })}
    <br>
    ${GrTextfieldTemplate({
      placeholder: 'Placeholder inside textfield',
      width: 300,
      placeholderPosition: 'inside', ...args
    })}
    <br>
    ${GrTextfieldTemplate({
      placeholder: 'Placeholder overline textfield',
      width: 300,
      placeholderPosition: 'overline', ...args
    })}
  `
}

export let Loading: StoryObj
Loading = {
  args: {
    placeholder: 'Loading textfield',
    loading: true
  }
}

export let Icons: StoryObj
Icons = {
  render: (args) => html`
    ${GrTextfieldTemplate({placeholder: 'Leading icon', leadingIcon: 'fa-solid fa-star', ...args})}
    ${GrTextfieldTemplate({placeholder: 'Trailing icon', trailingIcon: 'fa-solid fa-star', ...args})}
  `
}

export let Width: StoryObj
Width = {
  render: (args) => html`
    ${GrTextfieldTemplate({placeholder: '300px textfield', width: 300, ...args})}
    <br>
    ${GrTextfieldTemplate({placeholder: '500px textfield', width: 500, ...args})}
    <br>
    ${GrTextfieldTemplate({placeholder: 'full textfield', width: 'full', ...args})}
  `
}

export let InputTypes: StoryObj
InputTypes = {
  args: {
    width: 'full'
  },
  render: (args) => html`
    ${GrTextfieldTemplate({placeholder: 'Type text', inputType: 'text', ...args})}
    <br>
    ${GrTextfieldTemplate({placeholder: 'Type number', inputType: 'number', ...args})}
    <br>
    ${GrTextfieldTemplate({placeholder: 'Type email', inputType: 'email', ...args})}
    <br>
    ${GrTextfieldTemplate({placeholder: 'Type password', inputType: 'password', ...args})}
    <br>
    ${GrTextfieldTemplate({placeholder: 'Type alphanumeric', inputType: 'alphanumeric', ...args})}
    <br>
    ${GrTextfieldTemplate({placeholder: 'Type url', inputType: 'url', ...args})}
    <script type="text/javascript">
      const textFields = document.querySelectorAll('gr-textfield[input-type]')
      textFields.forEach(it => {
        it.addEventListener('gr-error', () => {
          it.setAttribute('error', 'Invalid value')
        })
        it.addEventListener('gr-input', () => {
          it.removeAttribute('error')
        })
      })
    </script>
  `
}

export let PasswordIcon: StoryObj
PasswordIcon = {
  args: {
    passwordIconOn: 'fa-solid fa-eye',
    passwordIconOff: 'fa-solid fa-eye-slash',
    inputType: 'password',
    value: 'Discovered password'
  }
}

export let MaxLength: StoryObj
MaxLength = {
  args: {
    maxLength: 5,
    placeholder: '5 max length'
  }
}

export let Readonly: StoryObj
Readonly = {
  args: {
    readonly: true,
    value: 'Readonly textfield'
  }
}

export let Error: StoryObj
Error = {
  render: (args) => html`
    ${GrTextfieldTemplate({placeholder: 'Error with message', error: 'Some error message', ...args})}
    ${GrTextfieldTemplate({placeholder: 'Error without message', error: '', ...args})}
  `
}