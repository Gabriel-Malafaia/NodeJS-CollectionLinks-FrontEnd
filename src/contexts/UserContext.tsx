import axios from "axios";
import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ILoginForm,
  IRegisterForm,
  IUser,
  IUserResponse,
} from "../interface/Home";
import { IUserContextProvider, IChildrenNode } from "../interface/TypeGlobal";
import Api from "../services/api";
import { toastError, toastSuccess } from "../styles/components/Toastify";

const userContext = createContext<IUserContextProvider>(
  {} as IUserContextProvider
);

const UserContextProvider = ({ children }: IChildrenNode) => {
  const [loading, setLoading] = useState(false);
  const navigation = useNavigate();

  const registerUser = async (data: IRegisterForm) => {
    setLoading(true);

    if (data.password != data.confirmPassword) {
      toastError("Senhas devem ser iguais.");
      return;
    }

    try {
      await Api.post("/users", data);
      navigation("/login");
      toastSuccess("Cadastramos você, agora faça o login!");
    } catch (err) {
      if (axios.isAxiosError(err)) {
        const error = err.response?.data;
        toastError(error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  const loginUser = async (data: ILoginForm) => {
    setLoading(true);

    try {
      const request = await Api.post("/session", data);
      const response: IUserResponse = request.data;
      localStorage.setItem("@collectionLinkToken", response.token);
      toastSuccess("Bem-vindo à Collection Link!");
      navigation("/dashboard");
    } catch (err) {
      if (axios.isAxiosError(err)) {
        const error = err.response?.data;
        toastError(error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <userContext.Provider value={{ registerUser, loading, loginUser}}>
      {children}
    </userContext.Provider>
  );
};

const useHomeContext = () => useContext(userContext);

export { UserContextProvider, useHomeContext };
