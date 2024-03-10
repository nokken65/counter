const ROMAN = {
  1000: 'M',
  900: 'CM',
  500: 'D',
  400: 'CD',
  100: 'C',
  90: 'XC',
  50: 'L',
  40: 'XL',
  10: 'X',
  9: 'IX',
  5: 'V',
  4: 'IV',
  1: 'I'
} as const

const KHIMER = {
  0: '០',
  1: '១',
  2: '២',
  3: '៣',
  4: '៤',
  5: '៥',
  6: '៦',
  7: '៧',
  8: '៨',
  9: '៩'
} as const

const TRANSLATIONS = { ROMAN, KHIMER } as const

export { TRANSLATIONS }
