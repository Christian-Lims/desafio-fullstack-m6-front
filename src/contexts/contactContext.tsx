import { AxiosError } from "axios";
import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";
import { iContactFormData } from "../pages/Modais/ModalAddContact";
import api, { iApiError } from "../services/api";
import { UserContext } from "./userContext";

interface iContactProviderProps {
  children: React.ReactNode;
}

interface iContactContext {
  load: boolean;
  setLoade: React.Dispatch<React.SetStateAction<boolean>>;
  addNewContact: (data: iContactFormData) => void;
  addContact: boolean;
  setAddContact: React.Dispatch<React.SetStateAction<boolean>>;
  editContact: boolean;
  setEditContact: React.Dispatch<React.SetStateAction<boolean>>;
  updateContact: (data: iContactFormData) => Promise<void>;
  editContactObj: iContact | null;
  setEditContactObj: React.Dispatch<React.SetStateAction<iContact | null>>;
  deleleContact: () => Promise<void>;
}

export interface iContact {
  id: string;
  full_name: string;
  email: string;
  phone_number: string;
  created_at?: string;
}

export const ContactContext = createContext({} as iContactContext);

const ContactProvider = ({ children }: iContactProviderProps) => {
  const { contacts, setContacts, removeEmptyProperties } =
    useContext(UserContext);
  const [load, setLoade] = useState<boolean>(false);
  const [addContact, setAddContact] = useState(false);
  const [editContact, setEditContact] = useState(false);
  const [editContactObj, setEditContactObj] = useState<iContact | null>(null);

  const token = localStorage.getItem("@TOKEN");

  async function getReloadContacts() {
    api.defaults.headers.authorization = `Bearer ${token}`;
    const { data } = await api.get("/contacts");

    setContacts(data.reverse());
  }

  const addNewContact = async (data: iContactFormData) => {
    setLoade(true);
    try {
      const res = await api.post("/contacts", data);
      toast.success("Contato salvo!", {
        position: "top-right",
        autoClose: 2000,
        theme: "dark",
      });
      setContacts([...contacts, res.data]);
      setAddContact(false);
    } catch (error) {
      toast.error("E-mail já existe!", {
        position: "top-right",
        autoClose: 2000,
        theme: "dark",
      });
      const requestError = error as AxiosError<iApiError>;
      console.error(requestError.response?.data);
    }
    setLoade(false);
  };

  const updateContact = async (data: iContactFormData) => {
    setLoade(true);
    const newData = removeEmptyProperties(data);
    try {
      await api.patch(`/contacts/${editContactObj?.id}`, newData);
      toast.success("Contato atualizado!", {
        position: "top-right",
        autoClose: 2000,
        theme: "dark",
      });
      setEditContact(false);
      getReloadContacts();
    } catch (error) {
      toast.error("E-mail já ultilizado!", {
        position: "top-right",
        autoClose: 2000,
        theme: "dark",
      });
      const requestError = error as AxiosError<iApiError>;
      console.error(requestError.response?.data);
    }
    setLoade(false);
  };

  const deleleContact = async () => {
    setLoade(true);
    try {
      await api.delete(`/contacts/${editContactObj?.id}`);
      toast.success("Contato deletado!", {
        position: "top-right",
        autoClose: 2000,
        theme: "dark",
      });
      setEditContact(false);
      getReloadContacts();
    } catch (error) {
      const requestError = error as AxiosError<iApiError>;
      console.error(requestError.response?.data);
    }
    setLoade(false);
  };

  return (
    <ContactContext.Provider
      value={{
        load,
        setLoade,
        addNewContact,
        addContact,
        setAddContact,
        editContact,
        setEditContact,
        updateContact,
        editContactObj,
        setEditContactObj,
        deleleContact,
      }}
    >
      {children}
    </ContactContext.Provider>
  );
};

export default ContactProvider;
