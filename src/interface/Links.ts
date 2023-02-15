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

export interface IEditDialog {
  id: string;
  title?: string;
  description?: string;
  isFavorite: boolean;
  url: string;
  state: boolean;
  setState: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface IDashCard {
  id: string;
  title: string;
  url: string;
  description: string;
  createdAt: string;
  isFavorite: boolean;
}


export interface IFavorite {
  name: string;
  url: string;
}

export interface ICollapsibleTable {
  name: string;
  favorites: IFavorite[];
}
