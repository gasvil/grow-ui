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