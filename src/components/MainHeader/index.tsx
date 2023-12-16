import { useMemo } from "react";

import * as S from "./styles";
import emojis from "../../utils/emojis";

const MainHeader = () => {
  const emoji = useMemo(() => {
    const indice = Math.floor(Math.random() * emojis.length);

    return emojis[indice];
  }, []);

  return (
    <S.Container>
      <h1>Toogle</h1>

      <S.Profile>
        <S.Welcome>Olá, {emoji}</S.Welcome>
        <S.UserName>Wigor Ribeiro</S.UserName>
      </S.Profile>
    </S.Container>
  );
};

export default MainHeader;
