import { TRANSLATIONS } from '../constants'

const decimalToKhimer = (number: number) => {
  if (isNaN(number)) {
    throw new Error('Not a number')
  }
  if (!Number.isInteger(number)) {
    throw new Error('Not a valid integer')
  }
  if (number < 0) {
    throw new Error('Must be more 1')
  }

  const digets = number.toString().split('')

  return digets.reduce(
    // @ts-expect-error fix later
    (conversion, diget) => conversion + TRANSLATIONS.KHIMER[diget],
    ''
  )
}

export { decimalToKhimer }
