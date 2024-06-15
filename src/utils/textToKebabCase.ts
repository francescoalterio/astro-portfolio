export function textToKebabCase (text: string): string {
  return text.split(' ').join('-').toLowerCase()
}
