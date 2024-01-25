import { useState } from "react";

import * as S from "./styles";

import logoImg from "../../assets/logo.svg";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { useAuth } from "../../hooks/auth";

const Sign = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const { signIn } = useAuth();

  return (
    <S.Container>
      <S.Logo>
        <img src={logoImg} alt="Minha carteira" />
        <h2>Minha Carteira</h2>
      </S.Logo>

      <S.Form onSubmit={() => signIn(email, password)}>
        <S.FormTitle>Entrar </S.FormTitle>

        <Input
          type="email"
          required
          placeholder="e-mail"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          required
          placeholder="senha"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit">Acessar</Button>
      </S.Form>
    </S.Container>
  );
};

export default Sign;
