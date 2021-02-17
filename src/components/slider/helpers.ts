import { TTotalValuePosition } from '@/components/slider/types'

export const getTotalPosition = ({
  value,
  min,
  max,
}: TTotalValuePosition): number => ((value - min) * 100) / (max - min)

export const getCoordsByEvent = ({
  changedTouches,
  clientX,
  clientY,
}: MouseEvent & TouchEvent): { clientX: number; clientY: number } => {
  const firstTouch = changedTouches ? changedTouches[0] : null
  return firstTouch
    ? { clientX: firstTouch.clientX, clientY: firstTouch.clientY }
    : { clientX, clientY }
}
