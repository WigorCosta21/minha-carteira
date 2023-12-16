import * as S from "./styles";

const Toogle = () => (
  <S.Container>
    <S.ToogleLabel>Light</S.ToogleLabel>
    <S.ToogleSelector
      checked
      uncheckedIcon={false}
      checkedIcon={false}
      onChange={() => console.log("Mudou")}
    />
    <S.ToogleLabel>Dark</S.ToogleLabel>
  </S.Container>
);

export default Toogle;
