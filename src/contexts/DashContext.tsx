import { createContext, useContext, useEffect, useState } from "react";
import { IUser } from "../interface/Home";
import { IDashContextProvider, IChildrenNode } from "../interface/TypeGlobal";
import Api from "../services/api";

const dashContext = createContext<IDashContextProvider>(
  {} as IDashContextProvider
);

const DashContextProvider = ({ children }: IChildrenNode) => {
  const [user, setUser] = useState<IUser>({} as IUser);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("@collectionLinkToken");
    const fetchData = async () => {
      try {
        Api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        const request = await Api.get("/users");
        const response: IUser = request.data;
        if(response.links.length == 0) {
          setLoading(true)
        }
        return response;
      } catch (err) {
        console.error("Deu erro");
      }
    };

    fetchData().then((res) => res && setUser(res));
  }, []);

  return (
    <dashContext.Provider value={{ user, setUser, loading }}>
      {children}
    </dashContext.Provider>
  );
};

const useDashContext = () => useContext(dashContext);

export { DashContextProvider, useDashContext };
