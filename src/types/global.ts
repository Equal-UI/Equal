import { Ref } from 'vue'
export type TEmit = (event: string, ...args: unknown[]) => void
export type TProps = { [key: string]: any }

export interface IEqual {
  drawers: Ref[]
  modals: Ref[]
}
