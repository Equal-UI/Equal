import { ColorFormats } from 'tinycolor2'

export interface TColorData {
  hsl: ColorFormats.HSL
  hsv: ColorFormats.HSV
  hex: string
  hex8: string
  rgba: ColorFormats.RGBA
  a: number
  // oldHue: number
  // source: object
}
