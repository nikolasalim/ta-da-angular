export interface IItem {
  id?: number,
  title: string,
  status: ItemStatus,
  durationLevel: IDurationLevel
}

export enum ItemStatus {
  Open = "OPEN",
  Resolved = "RESOLVED",
  OnHold = 'ON_HOLD'
}

export interface IDurationLevel {
  level: number, // ranges from 1 to how many item levels there are; the lower the level, the less time an item takes to be resolved
  colour: string, // hexadecimal code
  estimatedMinutesMin: number,
  estimatedMinutesMax: number | 'indefinitely',
}
