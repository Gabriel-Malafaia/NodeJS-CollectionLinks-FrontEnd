import { ILoginForm, IRegisterForm, IUser } from "./Home";

export interface IChildrenNode {
  children: React.ReactNode;
}

export interface IUserContextProvider {
  loading: boolean;
  registerUser: (data: IRegisterForm) => void;
  loginUser: (data: ILoginForm) => Promise<void>;
}

export interface IDashContextProvider {
  loading: boolean;
  user: IUser;
  setUser: React.Dispatch<React.SetStateAction<IUser>>;
}
