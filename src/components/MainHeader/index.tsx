import { useMemo } from "react";

import Toogle from "../Toogle";
import emojis from "../../utils/emojis";

import * as S from "./styles";

const MainHeader = () => {
  const emoji = useMemo(() => {
    const indice = Math.floor(Math.random() * emojis.length);

    return emojis[indice];
  }, []);

  return (
    <S.Container>
      <Toogle />

      <S.Profile>
        <S.Welcome>Olá, {emoji}</S.Welcome>
        <S.UserName>Wigor Ribeiro</S.UserName>
      </S.Profile>
    </S.Container>
  );
};

export default MainHeader;
