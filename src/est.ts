export function est(): string {
  const prefix = 'EST-'
  const number = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000
  return prefix + number
}
