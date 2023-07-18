import React, { useState } from "react";
import {
  Button,
  ErrorMessage,
  Form,
  FormContainer,
  Input,
  Label,
} from "../App.styled";
import { toast } from "react-toastify";
import { RegisterController } from "../controllers/Register";

import "react-toastify/dist/ReactToastify.css";
import { Home } from "./Home";
import { Header } from "../components/Header";

interface IRegisterResponse {
  name: string;
  status?: number;
  userId?: string;
  token?: string;
  message?: string | { password: string[] };
}

export function Register() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  document.title = "Login";

  const makeRegister = async () => {
    const res: IRegisterResponse = await RegisterController({
      name,
      email,
      password,
      confirmPassword,
    });
    console.log("res:", res);
    if (res.status !== 200) {
      if (res.message.password) {
        res.message.password.map((item) => {
          toast.error(item);
        });
      }
      if (res.message) toast.error(res?.message || "Erro ao realizar cadastro");
    }
    if (res?.token) {
      toast.success(`Cadastro realizado com sucesso`);
      localStorage.setItem("token", res.token);
      setLoggedIn(true);
    }
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    if (email === "" || password === "") {
      setError("Por favor, preencha todos os campos.");
      return;
    }
    await makeRegister();
  };

  if (isLoggedIn) {
    return <Home />;
  }
  return (
    <>
      <Header isLogged={isLoggedIn} />
      <FormContainer>
        <Form onSubmit={handleRegister}>
          <Label>Nome</Label>
          <Input
            required
            type="text"
            placeholder="Name"
            value={name}
            onChange={(element) => setName(element.target.value)}
          />
          <Label>Email</Label>
          <Input
            required
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(element) => setEmail(element.target.value)}
          />
          <Label>Senha</Label>
          <Input
            required
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(element) => setPassword(element.target.value)}
          />
          <Label>Confirmar Senha</Label>
          <Input
            required
            type="password"
            placeholder="Confirmar Senha"
            value={confirmPassword}
            onChange={(element) => setConfirmPassword(element.target.value)}
          />
          <Button bgColor="black" type="submit">
            Cadastrar-se
          </Button>
        </Form>
        {error && <ErrorMessage>{error}</ErrorMessage>}
      </FormContainer>
    </>
  );
}
