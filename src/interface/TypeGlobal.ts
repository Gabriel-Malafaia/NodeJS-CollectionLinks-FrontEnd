import { ILoginForm, IRegisterForm, IUser } from "./Home";
import { ICreateCardForm } from "./Links";

export interface IChildrenNode {
  children: React.ReactNode;
}

export interface IUserContextProvider {
  loading: boolean;
  registerUser: (data: IRegisterForm) => void;
  loginUser: (data: ILoginForm) => Promise<void>;
}

export interface IDashContextProvider {
  deleteLink: (id: string) => Promise<void>;
  createLink: (data: ICreateCardForm) => Promise<void>;
  loading: boolean;
  user: IUser;
  setUser: React.Dispatch<React.SetStateAction<IUser>>;
}
