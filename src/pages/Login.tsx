import React, { useState } from "react";
import {
  Button,
  ErrorMessage,
  Form,
  FormContainer,
  Input,
  Label,
  StyledLink,
} from "../App.styled";
import { LoginController } from "../controllers/Login";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import { Home } from "./Home";
import { Link } from "react-router-dom";
import { Header } from "../components/Header";

interface ILoginResponse {
  name: string;
  status?: number;
  userId?: string;
  token?: string;
  message?: string;
}

export function Login() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  document.title = "Login";

  const makeLogin = async () => {
    const res: ILoginResponse = await LoginController({ email, password });
    if (res.status !== 200) {
      toast.error(res?.message || "Erro ao fazer login");
    }
    if (res?.token) {
      toast.success(`Seja bem vindo ${res.name}`);
      localStorage.setItem("token", res.token);
      setLoggedIn(true);
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (email === "" || password === "") {
      setError("Por favor, preencha todos os campos.");
      return;
    }
    await makeLogin();
  };

  if (isLoggedIn) {
    return <Home />;
  }
  return (
    <>
      <Header isLogged={isLoggedIn} />
      <FormContainer>
        <Form onSubmit={handleLogin}>
          <Label>Email</Label>
          <Input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(element) => setEmail(element.target.value)}
          />
          <Label>Senha</Label>
          <Input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(element) => setPassword(element.target.value)}
          />
          <Link to="/Register">
            <StyledLink>Cadastrar-se</StyledLink>
          </Link>
          <Button bgColor="black" type="submit">
            Login
          </Button>
        </Form>
        {error && <ErrorMessage>{error}</ErrorMessage>}
      </FormContainer>
    </>
  );
}
