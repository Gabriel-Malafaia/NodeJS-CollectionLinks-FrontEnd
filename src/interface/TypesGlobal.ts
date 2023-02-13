import { IEditDemand } from "../context/UserContext";
import { ICreateDemandRequest } from "../pages/Dashboard/components/ModalCreateResquest";
import { IEditProfile } from "../pages/Dashboard/components/ModalEditProfile";
import { ILoginHookForm } from "../pages/Home/componentsHome/ModalLogin";
import { IRegisterHookForm } from "../pages/Home/componentsHome/ModalRegisterDev";

export interface IChildrenNode {
  children: React.ReactNode;
}

export interface IUser {
  email: string;
  name: string;
  type: "ong" | "dev";
  id: number;
  cnpj?: string;
  bio?: string;
  image?: string;
  phone?: string;
}

export interface IUserLogged {
  accessToken: string;
  user: IUser;
}

export interface IDemandsResponse {
  title: string;
  description: string;
  status: "Pendente" | "Em Andamento" | "Finalizado";
  userId: number | string;
  project_type: "Web" | "Mobile" | "Desktop";
  created_at: string;
  estimated_time: string;
  id: number;
  work_in: [IUser];
  dev_finished: boolean;
  finished_at: string;
  user: IUser;
}

export interface IUserContextProvider {
  actualSectionHome: string;
  setActualSectionHome: React.Dispatch<React.SetStateAction<string>>;
  loginUser: (data: ILoginHookForm) => Promise<void>;
  registerUser: (data: IRegisterHookForm) => Promise<void>;
  user: IUserLogged;
  actualModalDashboard: string;
  setactualModalDashboard: React.Dispatch<React.SetStateAction<string>>;
  editProfileRequest: (data: IEditProfile) => Promise<void>;
  createDemandRequest: (data: ICreateDemandRequest) => Promise<void>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  filteredListAux: IDemandsResponse[];
  setFilteredListAux: React.Dispatch<React.SetStateAction<IDemandsResponse[]>>;
  exit: boolean;
  setExit: React.Dispatch<React.SetStateAction<boolean>>;
  listAllActualDemands: () => Promise<void>;
  filteredList: IDemandsResponse[];
  editDemandRequest: (data: IEditDemand) => Promise<void>;
}

export interface IDemandContextProvider {}
