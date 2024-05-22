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

// export const getRegexFromType = (type: 'text' | 'number' | 'email' | 'password' | 'alphanumeric' | 'url'): RegExp => {
//     const regexMap: { [key in typeof type]: RegExp } = {
//         text: /^[a-zA-Z\s]+$/,
//         number: /^[0-9]+$/,
//         email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
//         password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
//         alphanumeric: /^[a-zA-Z0-9]+$/,
//         url: /^(http[s]?:\/\/)?(www\.)?[a-zA-Z0-9]+(\.[a-zA-Z]{2,}){1,3}(\/\S*)?$/
//     }
//
//     return regexMap[type]
// }

export const getRegexFromType = (type: 'text' | 'number' | 'email' | 'password' | 'alphanumeric' | 'url'): string => {
    const regexMap: { [key in typeof type]: string } = {
        text: "^[a-zA-Z\\s]+$",
        number: "^[0-9]+$",
        email: "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$",
        password: "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[a-zA-Z\\d]{8,}$",
        alphanumeric: "^[a-zA-Z0-9]+$",
        url: "^(http[s]?:\\/\\/)?(www\\.)?[a-zA-Z0-9]+(\\.[a-zA-Z]{2,}){1,3}(\\/\\S*)?$"
    }

    return regexMap[type]
}