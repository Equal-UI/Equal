type TTotalValuePosition = {
  value: number
  min: number
  max: number
}

export const getTotalPosition = ({ value, min, max }: TTotalValuePosition): number => ((value - min) * 100) / (max - min)
