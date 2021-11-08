export const add = (a: number, b: number) => {
  if (Number.isInteger(a) && Number.isInteger(b)) {
    return a + b;
  }
  throw new Error(`Invalid usage: only use essence to add (a: ${a} / b: ${b})`)
}
