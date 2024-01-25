import { ButtonHTMLAttributes } from "react";
import * as S from "./styles";

type IButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({ children, ...rest }: IButtonProps) => (
  <S.Container {...rest}>{children}</S.Container>
);
