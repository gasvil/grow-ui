export const modifiersToBem = (
	componentName: string,
	modifiersList: Array<String | undefined> = []
) => {
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