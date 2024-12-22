export function lat(): string {
  const prefix = 'LVA-'
  const number = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000
  return prefix + number
}
