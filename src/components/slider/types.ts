import {Ref} from 'vue'

export type TStepItem = {
  left: number
  active: boolean
}

export type TDataByPreparedStepList = {
  max: number,
  min: number,
  step: number,
  valuePosition: Ref<number>,
}
