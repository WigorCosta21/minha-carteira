import { ReactNode } from "react";
import * as S from "./styles";

type Props = {
  children: ReactNode;
};

const Content = ({ children }: Props) => {
  return <S.Container>{children}</S.Container>;
};

export default Content;
