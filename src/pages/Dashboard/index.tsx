import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ButtonSecundary } from "../../components/Buttons/styled";
import { CardContact } from "../../components/CardContact";
import { Loading } from "../../components/Loading/Loading";
import { ContactContext } from "../../contexts/contactContext";
import { UserContext } from "../../contexts/userContext";
import { ModalAddContact } from "../Modais/ModalAddContact";
import { ModalPerfilEdit } from "../Modais/ModalPerfilEdit";
import { Nav, DivDash, DivPerfil } from "./styled";
import { ModalEditContact } from "../Modais/ModalEditContact";

const Dashboard = () => {
  const { user, setUser, contacts, setEditPerfil, editPerfil } =
    useContext(UserContext);
  const { load, addContact, setAddContact, editContact } =
    useContext(ContactContext);

  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/Login");
    setUser(null);
  };

  const openModalAddContact = () => {
    setAddContact(true);
  };

  const openModalEditPerfil = () => {
    setEditPerfil(true);
  };

  return (
    <>
      <DivDash>
        <Nav>
          <DivPerfil>
            <h1>{user?.full_name}</h1>
            <p>{user?.email}</p>
          </DivPerfil>
          <div>
            <ButtonSecundary onClick={() => openModalAddContact()}>
              Novo Contato
            </ButtonSecundary>
            <ButtonSecundary onClick={openModalEditPerfil}>
              Editar Perfil
            </ButtonSecundary>
            <ButtonSecundary onClick={logout}>Sair</ButtonSecundary>
          </div>
        </Nav>
        <ul>
          {contacts
            .sort(function (x, y) {
              const a = x.full_name.toUpperCase(),
                b = y.full_name.toUpperCase();
              return a === b ? 0 : a > b ? 1 : -1;
            })
            .map((contact) => (
              <CardContact key={contact.id} contact={contact} />
            ))}
          {!contacts.length && <p>Nenhum contato salvo!.</p>}
        </ul>
      </DivDash>
      {!!addContact && <ModalAddContact />}
      {!!editPerfil && <ModalPerfilEdit />}
      {!!editContact && <ModalEditContact />}
      {!!load && <Loading></Loading>}
    </>
  );
};

export default Dashboard;
