import { Ref } from 'vue'
import { Positions } from '@/models/enums'

export type TTotalValuePosition = {
  value: number
  min: number
  max: number
}

export type TStepItem = {
  left: number
  active: boolean
}

export type TDataByPreparedStepList = {
  max: number
  min: number
  step: number
  valuePosition: Ref<number>
}

export type TKeyEvents = Positions.T | Positions.R | Positions.B | Positions.L

export type TResultUseValuePosition = [Ref<number>, (newValue: number) => void]
