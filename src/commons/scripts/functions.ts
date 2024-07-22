export const modifiersToBem = (
    componentName: string,
    modifiersList: Array<String | undefined | null> = []
): string => {
    if (modifiersList.length > 0) {
        const bemModifiers: Array<String> = []

        modifiersList.forEach(modifier => {
            if (modifier != undefined && modifier.length > 0) {
                bemModifiers.push(`gr-${componentName}--${modifier}`)
            }
        })

        return `gr-${componentName} ${bemModifiers.join(' ')}`
    } else {
        return `gr-${componentName}`
    }
}

export const findParentBackground = (element: HTMLElement): string | null => {
    let currentElement: HTMLElement | null = element
    while (currentElement) {
        const computedStyle = getComputedStyle(currentElement)
        const backgroundColor = computedStyle.backgroundColor

        if (backgroundColor !== 'transparent' && backgroundColor !== 'rgba(0, 0, 0, 0)') {
            return backgroundColor
        }

        currentElement = currentElement.parentElement
    }

    return null
}

export const getRegexFromType = (inputType: 'text' | 'number' | 'email' | 'password' | 'alphanumeric' | 'url'): string => {
    const regexMap: { [key in typeof inputType]: string } = {
        text: "^[a-zA-Z\\s]+$",
        number: "^[0-9]+$",
        email: "^[a-zA-Z0-9_\\.\\%\\+\\-]+@[a-zA-Z0-9]+\\.[a-zA-Z]{2,}$",
        password: "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[\\W_])[a-zA-Z\\d\\W_]{8,}$",
        alphanumeric: "^[a-zA-Z0-9]+$",
        url: "^(http[s]?:\\/\\/)?(www\\.)?[a-zA-Z0-9]+(\\.[a-zA-Z]{2,}){1,3}(\\/\\S*)?$"
    }

    return regexMap[inputType]
}