import {computed, ComputedRef} from 'vue';
import {TDataByPreparedStepList, TStepItem} from '@components/slider/types';

export const useStepsPoints = (
  defaultValue: TStepItem[],
  {max, min, step, valuePosition}: TDataByPreparedStepList
): ComputedRef<TStepItem[]> => (
  computed<TStepItem[]>(() => {
    const resultStepsPoints: TStepItem[] = [...defaultValue]
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
