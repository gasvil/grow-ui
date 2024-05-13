export interface TextfieldArgs {
    label?: string
}

export const GrTextfieldTemplate = (args: TextfieldArgs) => {
    const grTextfield = document.createElement('gr-textfield')

    args.label && grTextfield.setAttribute('label', args.label)

    return grTextfield
}