import { EDirections } from '@/models/enums'

type Props = {
  direction: EDirections
  array: []
  curIndex: number
}

export const getArrayIndexByDirection = ({
  direction,
  array,
  curIndex,
}: Props): number => {
  const resultMap = {
    [EDirections.UP]: curIndex <= 0 ? array.length - 1 : curIndex - 1,
    [EDirections.DOWN]: curIndex === array.length - 1 ? 0 : curIndex + 1,
  }
  return resultMap[direction]
}
