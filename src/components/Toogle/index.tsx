import * as S from "./styles";

interface IToggleProps {
  labelLeft: string;
  labelRight: string;
  checked: boolean;
  onChange(): void;
}

const Toogle = ({ labelLeft, labelRight, checked, onChange }: IToggleProps) => (
  <S.Container>
    <S.ToogleLabel>{labelLeft}</S.ToogleLabel>
    <S.ToogleSelector
      checked={checked}
      uncheckedIcon={false}
      checkedIcon={false}
      onChange={onChange}
    />
    <S.ToogleLabel>{labelRight}</S.ToogleLabel>
  </S.Container>
);

export default Toogle;
