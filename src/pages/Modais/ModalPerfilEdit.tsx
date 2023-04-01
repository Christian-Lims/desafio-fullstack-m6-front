import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { DivModal } from "./styled";
import { ButtonDelete, ButtonPrimary } from "../../components/Buttons/styled";
import { useNavigate } from "react-router-dom";
import { iRegisterFormData } from "../Register";
import { UserContext } from "../../contexts/userContext";

const schema = yup.object({
  full_name: yup.string().notRequired(),
  phone_number: yup.string().notRequired(),
  email: yup.string().email().notRequired(),
  password: yup.string().notRequired(),
});

export const ModalPerfilEdit = () => {
  const { user, updatePefil, setEditPerfil, delelePerfil } =
    useContext(UserContext);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iRegisterFormData>({
    resolver: yupResolver(schema),
  });

  const close = () => {
    setEditPerfil(false);
    navigate("/");
  };

  return (
    <DivModal>
      <div>
        <div>
          <h1>Editar Perfil</h1>
          <button onClick={close}>x</button>
        </div>
        <form onSubmit={handleSubmit(updatePefil)}>
          <label htmlFor="full_name">Nome completo</label>
          <input
            type="text"
            id="full_name"
            placeholder="Digite aqui seu nome completo"
            defaultValue={user?.full_name}
            {...register("full_name")}
          />
          <p>{errors.full_name?.message}</p>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Digite aqui seu email"
            {...register("email")}
          />
          <p>{errors.email?.message}</p>
          <label htmlFor="password">Senha</label>
          <input
            type="password"
            id="password"
            placeholder="Digite aqui sua senha"
            {...register("password")}
          />
          <label htmlFor="phone_number">Número de telefone</label>
          <input
            type="text"
            id="phone_number"
            placeholder="Digite seu novo número"
            defaultValue={user?.phone_number}
            {...register("phone_number")}
          />
          <p>{errors.phone_number?.message}</p>
          <ButtonPrimary type="submit">Salvar</ButtonPrimary>
        </form>
        <ButtonDelete onClick={delelePerfil}>Deletar conta</ButtonDelete>
      </div>
    </DivModal>
  );
};
