import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { DivModal } from "./styled";
import { ButtonPrimary, ButtonDelete } from "../../components/Buttons/styled";
import { useNavigate } from "react-router-dom";
import { ContactContext } from "../../contexts/contactContext";
import { iContactFormData } from "./ModalAddContact";

const schema = yup.object({
  full_name: yup.string().notRequired(),
  phone_number: yup.string().notRequired(),
  email: yup.string().email("Email inválido!").notRequired(),
});

export const ModalEditContact = () => {
  const { setEditContact, updateContact, editContactObj, deleleContact } =
    useContext(ContactContext);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iContactFormData>({
    resolver: yupResolver(schema),
  });

  const close = () => {
    setEditContact(false);
    navigate("/");
  };

  return (
    <DivModal>
      <div>
        <div>
          <h1>Editar Contato</h1>
          <button onClick={close}>x</button>
        </div>
        <form onSubmit={handleSubmit(updateContact)}>
          <label htmlFor="full_name">Nome do contato</label>
          <input
            type="text"
            id="full_name"
            placeholder="Digite o nome completo"
            defaultValue={editContactObj?.full_name}
            {...register("full_name")}
          />
          <p>{errors.full_name?.message}</p>
          <label htmlFor="email">Número de telefone</label>
          <input
            type="text"
            id="email"
            placeholder="Digite o novo email"
            {...register("email")}
          />
          <p>{errors.phone_number?.message}</p>
          <label htmlFor="phone_number">Número de telefone</label>
          <input
            type="text"
            id="phone_number"
            placeholder="Digite o novo número"
            defaultValue={editContactObj?.phone_number}
            {...register("phone_number")}
          />
          <p>{errors.phone_number?.message}</p>
          <ButtonPrimary type="submit">Salvar</ButtonPrimary>
        </form>
        <ButtonDelete onClick={deleleContact}>Apagar</ButtonDelete>
      </div>
    </DivModal>
  );
};
