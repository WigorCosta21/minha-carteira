import { ReactNode } from "react";
import * as S from "./styles";

interface IContentProps {
  children: ReactNode;
}

const Content = ({ children }: IContentProps) => (
  <S.Container>{children}</S.Container>
);

export default Content;
