import { EDirections } from '@/models/enums'

type Props = {
  duration: EDirections
  array: []
  curIndex: number
}

export const getArrayIndexByDuration = ({
  duration,
  array,
  curIndex,
}: Props): number => {
  const resultMap = {
    [EDirections.UP]: curIndex <= 0 ? array.length - 1 : curIndex - 1,
    [EDirections.DOWN]: curIndex === array.length - 1 ? 0 : curIndex + 1,
  }
  return resultMap[duration]
}
