export interface IItem {
  id: number,
  title: string,
  status: ItemStatus
}

export enum ItemStatus {
  OPEN = 'open',
  RESOLVED = 'resolved',
  ON_HOLD = 'onHold'
}