import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { ContactContext } from "../../contexts/contactContext";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { DivModal } from "./styled";
import { ButtonPrimary } from "../../components/Buttons/styled";
import { useNavigate } from "react-router-dom";

export interface iContactFormData {
  full_name?: string;
  email?: string;
  phone_number?: string;
}

const schema = yup.object({
  full_name: yup.string().required("Nome é obrigatório!"),
  email: yup.string().email("Email inválido!").required("Email é obrigatório!"),
  phone_number: yup.string().required("Número é obrigatório!"),
});

export const ModalAddContact = () => {
  const { addNewContact, setAddContact } = useContext(ContactContext);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iContactFormData>({
    resolver: yupResolver(schema),
  });

  const close = () => {
    setAddContact(false);
    navigate("/");
  };

  return (
    <DivModal>
      <div>
        <div>
          <h1>Cadastrar novo contato</h1>
          <button onClick={close}>x</button>
        </div>
        <form onSubmit={handleSubmit(addNewContact)}>
          <label htmlFor="full_name">Nome completo</label>
          <input
            type="text"
            id="full_name"
            placeholder="Digite aqui o nome completo"
            {...register("full_name")}
          />
          <p>{errors.full_name?.message}</p>

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Digite aqui o email"
            {...register("email")}
          />
          <p>{errors.email?.message}</p>
          <label htmlFor="phone_number">Número de telefone</label>
          <input
            type="text"
            id="phone_number"
            placeholder="Digite o telefone"
            {...register("phone_number")}
          />
          <p>{errors.phone_number?.message}</p>
          <ButtonPrimary type="submit">Salvar</ButtonPrimary>
        </form>
      </div>
    </DivModal>
  );
};
