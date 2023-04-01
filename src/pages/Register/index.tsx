import { ButtonPrimary } from "../../components/Buttons/styled";
import { ContainerForm, DivForm } from "../../components/FormStyled/styled";
import { Link } from "react-router-dom";
import { DivFooterForm } from "../../components/FormStyled/styled";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { UserContext } from "../../contexts/userContext";
import { useContext } from "react";

export interface iRegisterFormData {
  full_name: string;
  email: string;
  password: string;
  phone_number: string;
}

const schema = yup.object({
  full_name: yup.string().required("Nome é obrigatório!"),
  email: yup.string().email("Email inválido!").required("Email é obrigatório!"),
  password: yup
    .string()
    .min(8, "Deve conter pelo menos 8 caracteres!")
    .matches(/[A-Z]/, "Deve conter uma letra maiúscula!")
    .matches(/([a-z])/, "Deve conter uma miniscula!")
    .matches(/(\d)/, "Deve conter um número!")
    .required("Senha obrigatória!"),
  phone_number: yup.string().required("Número é obrigatório!"),
});

const Register = () => {
  const { registerUser } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iRegisterFormData>({
    resolver: yupResolver(schema),
  });

  return (
    <ContainerForm>
      <DivForm>
        <h1>Cadastro</h1>
        <form onSubmit={handleSubmit(registerUser)}>
          <label htmlFor="full_name">Nome Completo</label>
          <input
            type="text"
            id="full_name"
            placeholder="Digite aqui seu nome completo"
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
          <p>{errors.password?.message}</p>
          <label htmlFor="phone_number">Número de telefone</label>
          <input
            type="text"
            id="phone_number"
            placeholder="Digite aqui seu telefone"
            {...register("phone_number")}
          />
          <p>{errors.phone_number?.message}</p>
          <DivFooterForm>
            <span>Já tem conta?</span>
            <Link to={"/Login"}>Fazer login</Link>
          </DivFooterForm>
          <ButtonPrimary type="submit">Cadastrar</ButtonPrimary>
        </form>
      </DivForm>
    </ContainerForm>
  );
};

export default Register;
