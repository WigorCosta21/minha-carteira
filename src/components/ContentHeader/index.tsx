import { ReactNode } from "react";
import SelectInput from "../SelectIput";
import * as S from "./style";

interface IContentHeaderProps {
  title: string;
  linecolor: string;
  children: ReactNode;
}

const ContentHeader = ({ title, linecolor, children }: IContentHeaderProps) => (
  <S.Container>
    <S.TitleContainer linecolor={linecolor}>
      <h1>{title}</h1>
    </S.TitleContainer>
    <S.Controllers>{children}</S.Controllers>
  </S.Container>
);

export default ContentHeader;
