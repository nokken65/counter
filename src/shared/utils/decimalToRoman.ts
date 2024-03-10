import { TRANSLATIONS } from '../constants'

const decimalToRoman = (number: number) => {
  if (number === 0) {
    return 'nulla'
  }
  if (isNaN(number)) {
    throw new Error('Not a number')
  }
  if (!Number.isInteger(number)) {
    throw new Error('Not a valid integer')
  }
  if (number < 1) {
    throw new Error('Must be more 1')
  }
  if (number > 3999) {
    return 'Too big'
  }

  const translations = [...Object.entries(TRANSLATIONS.ROMAN)]
  let romanConversion = ''
  for (let i = 0; i < translations.length; i++) {
    const [decimal, roman] = translations[i] as [string, string]

    while (number >= +decimal) {
      romanConversion += roman
      number -= +decimal
    }
  }
  return romanConversion
}

export { decimalToRoman }
