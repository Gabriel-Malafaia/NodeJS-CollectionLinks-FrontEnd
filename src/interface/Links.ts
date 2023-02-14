export interface ICreateCardForm {
  title: string;
  description?: string;
  url: string;
}

export interface IEditCardForm {
  title?: string;
  description?: string;
  url?: string;
}