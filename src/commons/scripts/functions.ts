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

export const slideDown = (target: HTMLElement, duration: number = 250) => {
  target.style.removeProperty('display');
  let display = window.getComputedStyle(target).display;
  if (display === 'none') display = 'flex';
  target.style.display = display;
  let height = target.offsetHeight;
  target.style.overflow = 'hidden';
  target.style.height = '0';
  target.style.paddingTop = '0';
  target.style.paddingBottom = '0';
  target.style.marginTop = '0';
  target.style.marginBottom = '0';
  target.offsetHeight;
  target.style.boxSizing = 'border-box';
  target.style.transitionProperty = "height, margin, padding";
  target.style.transitionDuration = duration + 'ms';
  target.style.height = height + 'px';
  target.style.removeProperty('padding-top');
  target.style.removeProperty('padding-bottom');
  target.style.removeProperty('margin-top');
  target.style.removeProperty('margin-bottom');
  window.setTimeout(() => {
    target.style.removeProperty('height');
    target.style.removeProperty('overflow');
    target.style.removeProperty('transition-duration');
    target.style.removeProperty('transition-property');
  }, duration);
}

export const slideUp = (target: HTMLElement, duration: number = 250) => {
  target.style.transitionProperty = 'height, margin, padding';
  target.style.transitionDuration = duration + 'ms';
  target.style.boxSizing = 'border-box';
  target.style.height = target.offsetHeight + 'px';
  target.offsetHeight;
  target.style.overflow = 'hidden';
  target.style.height = '0';
  target.style.paddingTop = '0';
  target.style.paddingBottom = '0';
  target.style.marginTop = '0';
  target.style.marginBottom = '0';
  window.setTimeout(() => {
    target.style.display = 'none';
    target.style.removeProperty('height');
    target.style.removeProperty('padding-top');
    target.style.removeProperty('padding-bottom');
    target.style.removeProperty('margin-top');
    target.style.removeProperty('margin-bottom');
    target.style.removeProperty('overflow');
    target.style.removeProperty('transition-duration');
    target.style.removeProperty('transition-property');
  }, duration);
}

export const slideToggle = (target: HTMLElement, duration: number = 250, opened?: () => boolean) => {
  if (window.getComputedStyle(target).display === 'none') {
    opened?.call(true)
    return slideDown(target, duration);
  } else {
    opened?.call(false)
    return slideUp(target, duration);
  }
}

export const getSiblings = (element: HTMLElement, selector = null): HTMLElement[] => {
  const siblings: HTMLElement[] = []

  if (!element.parentNode) {
    return siblings
  }

  const allChilds = element.parentNode.children
  Array.from(allChilds, child => {
    if (child != element && !(child as any).matches(selector)) {
      siblings.push(child as HTMLElement)
    }
  })

  return siblings
}