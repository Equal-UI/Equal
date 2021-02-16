import {Ref} from 'vue'
import {EKeyDirections} from "@components/slider/abstracts/enums";

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

export type TKeyEvents = EKeyDirections.UP | EKeyDirections.RIGHT | EKeyDirections.DOWN | EKeyDirections.LEFT

export type TResultUseValuePosition = [Ref<number>, (newValue: number) => void]
