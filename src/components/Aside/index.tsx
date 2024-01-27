import {
  MdDashboard,
  MdArrowDownward,
  MdArrowUpward,
  MdExitToApp,
} from "react-icons/md";

import logoImg from "../../assets/logo.svg";

import * as S from "./styles";
import { useAuth } from "../../hooks/auth";

const Aside = () => {
  const { signOut } = useAuth();

  return (
    <S.Container menuIsOpen={true}>
      <S.Header>
        <S.LogoImg src={logoImg} alt="Logo Minha Carteira" />
        <S.Title>Minha Carteira</S.Title>
      </S.Header>
      <S.MenuContainer>
        <S.MenuItemLink href="/">
          <MdDashboard />
          Dashboard
        </S.MenuItemLink>
        <S.MenuItemLink href="/list/entry-balance">
          <MdArrowUpward />
          Entradas
        </S.MenuItemLink>
        <S.MenuItemLink href="/list/exit-balance">
          <MdArrowDownward />
          Saídas
        </S.MenuItemLink>
        <S.MenuItemButton onClick={signOut}>
          <MdExitToApp />
          Sair
        </S.MenuItemButton>
      </S.MenuContainer>
    </S.Container>
  );
};

export default Aside;
