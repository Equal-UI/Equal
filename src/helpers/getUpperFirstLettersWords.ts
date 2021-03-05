export const getUpperFirstLettersWords = (text = '', wordCount = 1): string => {
  if (!text) return ''
  const words = text.split(' ')
  return words
    .splice(0, wordCount)
    .reduce((str, word) => (str += word[0]), '')
    .toUpperCase()
}
