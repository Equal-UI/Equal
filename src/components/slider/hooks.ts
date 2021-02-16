import {computed, ref, Ref, ComputedRef} from 'vue';
import {TDataByPreparedStepList, TResultUseValuePosition, TStepItem} from '@components/slider/abstracts/types';
import {getTotalPosition} from "./helpers";

export const useStepsPoints = (
  startValue: TStepItem[],
  {max, min, step, valuePosition}: TDataByPreparedStepList
): ComputedRef<TStepItem[]> => (
  computed<TStepItem[]>(() => {
    const resultStepsPoints: TStepItem[] = [...startValue]
    const countPoints = (max - min) / step
    let accumulatedLeft = 0
    const distanceBetweenPoints = 100 / (max / step)

    for (let i = 0; i < countPoints; i++) {
      accumulatedLeft += distanceBetweenPoints
      const active = accumulatedLeft <= valuePosition.value
      resultStepsPoints.push({left: accumulatedLeft, active})
    }

    return resultStepsPoints
  })
);

export const useValuePosition = (
  props: {[key: string]: any},
  emit: (name: string, prop: any) => void
): TResultUseValuePosition => {
  const startValue = getTotalPosition({
    value: props.modelValue,
    min: props.min,
    max: props.max,
  });
  const valuePosition: Ref<number> = ref<number>(startValue);

  const setValuePosition = (newValue: number) => {
    if (newValue < 0) {
      newValue = 0
    } else if (newValue > 100) {
      newValue = 100
    }

    const lengthPerStep = 100 / ((props.max - props.min) / props.step)
    const steps = Math.round(newValue / lengthPerStep)
    let totalValue = steps * lengthPerStep * (props.max - props.min) * 0.01 + props.min
    totalValue = parseFloat(totalValue.toFixed(0)) > props.max
      ? props.max
      : parseFloat(totalValue.toFixed(0))

    emit('update:modelValue', totalValue)
    valuePosition.value = getTotalPosition({
      value: totalValue,
      min: props.min,
      max: props.max,
    })
  };

  return [valuePosition, setValuePosition];
};
