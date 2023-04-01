import { ButtonPrimary } from "../../components/Buttons/styled";
import {
  ContainerForm,
  DivFooterForm,
  DivForm,
} from "../../components/FormStyled/styled";
import { Link } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { UserContext } from "../../contexts/userContext";
import { useContext } from "react";

export interface iLoginFormData {
  email: string;
  password: string;
}

const schema = yup.object({
  email: yup.string().required("Email é obrigatório!"),
  password: yup.string().required("Senha obrigatória!"),
});

const Login = () => {
  const { loginUser } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iLoginFormData>({
    resolver: yupResolver(schema),
  });

  return (
    <ContainerForm>
      <DivForm>
        <h1>Login</h1>
        <form onSubmit={handleSubmit(loginUser)}>
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
          <DivFooterForm>
            <span>Ainda não possui uma conta?</span>
            <Link to={"/Register"}>Cadastre-se</Link>
          </DivFooterForm>
          <ButtonPrimary type="submit">Entrar</ButtonPrimary>
        </form>
      </DivForm>
    </ContainerForm>
  );
};

export default Login;
