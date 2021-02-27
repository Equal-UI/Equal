import tinycolor from 'tinycolor2'
import { TColorData } from './types'

export function _colorChange(data: any): TColorData {
  const alpha = data && data.a
  const color = tinycolor(data)

  if (color && (color.getAlpha() === undefined || color.getAlpha() === null)) {
    color.setAlpha(alpha || 1)
  }

  const hsl = color.toHsl()
  const hsv = color.toHsv()

  // prevents color change when cursor is on max left position
  if (hsl.s === 0) {
    hsv.h = hsl.h = data.h || (data.hsl && data.hsl.h) || 0
  }

  // prevents color change when cursor is on max bottom position
  if (hsv.v < 0.0164) {
    hsv.h = data.h || (data.hsv && data.hsv.h) || 0
    hsv.s = data.s || (data.hsv && data.hsv.s) || 0
  }

  if (hsl.l < 0.01) {
    hsl.h = data.h || (data.hsl && data.hsl.h) || 0
    hsl.s = data.s || (data.hsl && data.hsl.s) || 0
  }

  return {
    hsl,
    hex: color.toHexString().toUpperCase(),
    hex8: color.toHex8String().toUpperCase(),
    rgba: color.toRgb(),
    hsv,
    a: data.a || color.getAlpha(),
  }
}
