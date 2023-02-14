import axios from "axios";
import Api from "../services/api";
import { createContext, useContext, useEffect, useState } from "react";
import { IUser } from "../interface/Home";
import { ICreateCardForm } from "../interface/Links";
import { IDashContextProvider, IChildrenNode } from "../interface/TypeGlobal";
import { toastError, toastSuccess } from "../styles/components/Toastify";

const dashContext = createContext<IDashContextProvider>(
  {} as IDashContextProvider
);

const DashContextProvider = ({ children }: IChildrenNode) => {
  const [user, setUser] = useState<IUser>({} as IUser);
  const [update, setUpdate] = useState(false);
  const [loading, setLoading] = useState(false);

  const createLink = async (data: ICreateCardForm) => {
    !data.description && delete data.description;
    setLoading(true);

    try {
      await Api.post("/links", data);
      toastSuccess("Link Cadastrado!");
      setUpdate(!update);
    } catch (err) {
      if (axios.isAxiosError(err)) {
        const error = err.response?.data;
        toastError(error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  const deleteLink = async (id: string) => {
    setLoading(true);

    try {
      await Api.delete(`/links/${id}`);
      toastSuccess("Link Deletado!");
      setUpdate(!update);
    } catch (err) {
      if (axios.isAxiosError(err)) {
        const error = err.response?.data;
        toastError(error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("@collectionLinkToken");
    const fetchData = async () => {
      try {
        Api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        const request = await Api.get("/users");
        const response: IUser = request.data;
        if (response.links.length == 0) {
          setLoading(true);
        }
        return response;
      } catch (err) {
        console.error("Deu erro");
      }
    };

    fetchData().then((res) => res && setUser(res));
  }, [update]);

  return (
    <dashContext.Provider
      value={{ user, setUser, loading, createLink, deleteLink }}
    >
      {children}
    </dashContext.Provider>
  );
};

const useDashContext = () => useContext(dashContext);

export { DashContextProvider, useDashContext };
