import { useContext } from "react";
import { ContactContext, iContact } from "../../contexts/contactContext";
import { LiCard } from "./styled";

interface iCardContactProps {
  contact: iContact;
}

export const CardContact = ({ contact }: iCardContactProps) => {
  const { setEditContact, setEditContactObj } = useContext(ContactContext);

  const openModal = (oldContact: iContact) => {
    setEditContactObj(oldContact);
    setEditContact(true);
  };

  return (
    <LiCard>
      <h2>{contact.full_name}</h2>
      <p>{contact.email}</p>
      <p>{contact.phone_number}</p>
      <span>{contact.created_at}</span>
      <button onClick={() => openModal(contact)}>Editar</button>
    </LiCard>
  );
};
