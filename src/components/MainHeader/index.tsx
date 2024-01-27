import { useMemo, useState } from "react";

import emojis from "../../utils/emojis";

import * as S from "./styles";
import { useTheme } from "../../hooks/themes";

const MainHeader = () => {
  const { toggleTheme, theme } = useTheme();

  const [darkTheme, setDarkTheme] = useState(() =>
    theme.title === "dark" ? true : false
  );

  const handleChangeTheme = () => {
    setDarkTheme(!darkTheme);
    toggleTheme();
  };

  const emoji = useMemo(() => {
    const indice = Math.floor(Math.random() * emojis.length);

    return emojis[indice];
  }, []);

  return (
    <S.Container>
      <S.Toggle
        labelLeft="Light"
        labelRight="Dark"
        checked={darkTheme}
        onChange={handleChangeTheme}
      />

      <S.Profile>
        <S.Welcome>Olá, {emoji}</S.Welcome>
        <S.UserName>Wigor Ribeiro</S.UserName>
      </S.Profile>
    </S.Container>
  );
};

export default MainHeader;
