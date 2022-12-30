export interface IItem {
  id?: number,
  title: string,
  status: ItemStatus
}

export enum ItemStatus {
  Open = "OPEN",
  Resolved = "RESOLVED",
  OnHold = 'ON_HOLD'
}