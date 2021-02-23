// tslint:disable-next-line: variable-name
export const clamp = (number: number, min = 0, max = 1): number => {
  return number > max ? max : number < min ? min : number
}
