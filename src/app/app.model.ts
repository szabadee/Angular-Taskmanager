export class AppModel {

  constructor (
    public title?: string,
    public checked: boolean = false,
    public category?: Category,
    public text?: string,
    public name?: string,
    public password?: string,
    public email?: string) {
  }
}

export enum Category {
  BILLING = 'BILLING',
  HOUSE = 'HOUSE',
  SHOPPING = 'SHOPPING',
  TRAVEL = 'TRAVEL'
}

export interface AppInterface {
  title?: string;
  checked?: boolean;
  category?: string;
  text?: string;
}
