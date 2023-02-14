export interface IRegisterForm {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface ILoginForm {
  email: string;
  password: string;
}

interface ITopics {
  id: string;
  name: string;
  url: string;
}

interface ILink {
  id: string;
  title: string;
  description: string;
  url: string;
  favorite: boolean;
  createdAt: string;
  updatedAt: string;
  mainTopics: ITopics[];
}

export interface IUser {
  id: string;
  name: string;
  email: string;
  createdAt: string;
  links: ILink[];
}

export interface IUserResponse {
  user: IUser;
  token: string;
}
