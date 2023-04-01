import { AxiosError } from "axios";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { iLoginFormData } from "../pages/Login";
import { iRegisterFormData } from "../pages/Register";
import api, { iApiError } from "../services/api";
import { iContact } from "./contactContext";

interface iUserProviderProps {
  children: React.ReactNode;
}

interface iUserContext {
  registerUser: (data: iRegisterFormData) => Promise<void>;
  loginUser: (data: iLoginFormData) => Promise<void>;
  user: iUser | null;
  setUser: React.Dispatch<React.SetStateAction<iUser | null>>;
  loading: boolean;
  contacts: iContact[];
  setContacts: React.Dispatch<React.SetStateAction<iContact[]>>;
  updatePefil: (data: iRegisterFormData) => Promise<void>;
  editPerfil: boolean;
  setEditPerfil: React.Dispatch<React.SetStateAction<boolean>>;
  delelePerfil: () => Promise<void>;
  removeEmptyProperties: (obj: object) => {
    [k: string]: any;
  };
}

export interface iUser {
  id: string;
  full_name: string;
  email: string;
  phone_number: string;
  isActive: boolean;
  contacts?: iContact[];
}

export const UserContext = createContext({} as iUserContext);

const UserProvider = ({ children }: iUserProviderProps) => {
  const [user, setUser] = useState<iUser | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [contacts, setContacts] = useState([] as iContact[]);
  const [editPerfil, setEditPerfil] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const loadUser = async () => {
      const token = localStorage.getItem("@TOKEN");
      if (token) {
        try {
          api.defaults.headers.authorization = `Berear ${token}`;
          const data = await api.get("/profile");
          setUser(data.data);
          setContacts(data.data.contacts);
        } catch (error) {
          const requestError = error as AxiosError<iApiError>;
          console.error(requestError.response?.data);
          localStorage.clear();
        }
      }
      setLoading(false);
    };

    loadUser();
  }, []);

  function removeEmptyProperties(obj: object) {
    return Object.fromEntries(Object.entries(obj).filter(([_, v]) => v != ""));
  }

  const registerUser = async (data: iRegisterFormData) => {
    try {
      await api.post("/clients", data);
      toast.success("Conta criada!", {
        position: "top-right",
        autoClose: 2000,
        theme: "dark",
      });
      navigate("/Login");
    } catch (error) {
      toast.error("E-mail já existe!", {
        position: "top-right",
        autoClose: 2000,
        theme: "dark",
      });
      const requestError = error as AxiosError<iApiError>;
      console.error(requestError.response?.data);
    }
  };

  const loginUser = async (data: iLoginFormData) => {
    localStorage.clear();
    try {
      const res = await api.post("/login", data);
      localStorage.setItem("@TOKEN", res.data.token);
      toast.success("Sucesso!", {
        position: "top-right",
        autoClose: 2000,
        theme: "dark",
      });
      api.defaults.headers.authorization = `Berear ${res.data.token}`;
      const userData = await api.get("/profile");
      setUser(userData.data);
      setContacts(userData.data.contacts);
      navigate("/Dashboard");
    } catch (error) {
      toast.error("Senha e/ou email está incorreto!", {
        position: "top-right",
        autoClose: 2000,
        theme: "dark",
      });
    }
  };

  const updatePefil = async (data: iRegisterFormData) => {
    const newData = removeEmptyProperties(data);
    console.log(newData);
    try {
      const res = await api.patch(`/clients/${user?.id}`, newData);
      toast.success("Perfil atualizado!", {
        position: "top-right",
        autoClose: 2000,
        theme: "dark",
      });
      setUser(res.data);
      setEditPerfil(false);
    } catch (error) {
      toast.error("E-mail já ultilizado!", {
        position: "top-right",
        autoClose: 2000,
        theme: "dark",
      });
      const requestError = error as AxiosError<iApiError>;
      console.error(requestError.response?.data);
    }
  };

  const delelePerfil = async () => {
    try {
      await api.delete(`/clients/${user?.id}`);
      toast.success("Perfil deletado!", {
        position: "top-right",
        autoClose: 2000,
        theme: "dark",
      });
      setUser(null);
      navigate("/Register");
    } catch (error) {
      const requestError = error as AxiosError<iApiError>;
      console.error(requestError.response?.data);
    }
  };

  return (
    <UserContext.Provider
      value={{
        registerUser,
        loginUser,
        user,
        setUser,
        loading,
        contacts,
        setContacts,
        updatePefil,
        removeEmptyProperties,
        editPerfil,
        setEditPerfil,
        delelePerfil,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
