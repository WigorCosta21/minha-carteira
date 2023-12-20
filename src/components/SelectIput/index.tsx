import { ChangeEvent } from "react";
import * as S from "./styles";

interface ISelectInputProps {
  options: {
    value: string | number;
    label: string | number;
  }[];
  onChange(event: ChangeEvent<HTMLSelectElement>): void | undefined;
  defaultValue?: string | number;
}

const SelectInput = ({
  options,
  onChange,
  defaultValue,
}: ISelectInputProps) => {
  return (
    <S.Container>
      <select onChange={onChange} defaultValue={defaultValue}>
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
