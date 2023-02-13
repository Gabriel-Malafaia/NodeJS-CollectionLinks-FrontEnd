import { ILoginForm, IRegisterForm } from "./Home";

export interface IChildrenNode {
  children: React.ReactNode;
}

export interface IUserContextProvider {
  loading: boolean;
  registerUser: (data: IRegisterForm) => void;
  loginUser: (data: ILoginForm) => Promise<void>;
}
