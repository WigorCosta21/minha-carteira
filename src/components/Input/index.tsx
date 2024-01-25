import { InputHTMLAttributes } from "react";
import * as S from "./styles";

type IInputProps = InputHTMLAttributes<HTMLInputElement>;

export const Input = ({ ...rest }: IInputProps) => <S.Container {...rest} />;
