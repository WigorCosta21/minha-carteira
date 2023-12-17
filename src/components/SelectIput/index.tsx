import * as S from "./styles";

interface ISelectInputProps {
  options: {
    value: string | number;
    label: string | number;
  }[];
}

const SelectInput = ({ options }: ISelectInputProps) => {
  return (
    <S.Container>
      <select>
        {options.map((option) => (
          <option key={option.label} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </S.Container>
  );
};

export default SelectInput;
