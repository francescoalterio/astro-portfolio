export function capitalizeText (text: string): string {
  if (text === undefined) return ''
  const textSplited = text.split('-')
  const capitalized = textSplited.map((word) => {
    const wordSplited = word.split('')
    const wordCapitalized = wordSplited.map((letter, index) =>
      index === 0 ? letter.toUpperCase() : letter
    )
    return wordCapitalized.join('')
  })
  return capitalized.join(' ')
}
