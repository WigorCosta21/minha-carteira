import { ReactNode } from "react";
import SelectInput from "../SelectIput";
import * as S from "./style";

interface IContentHeaderProps {
  title: string;
  lineColor: string;
  children: ReactNode;
}

const ContentHeader = ({ title, lineColor, children }: IContentHeaderProps) => {
  return (
    <S.Container>
      <S.TitleContainer lineColor={lineColor}>
        <h1>{title}</h1>
      </S.TitleContainer>
      <S.Controllers>{children}</S.Controllers>
    </S.Container>
  );
};

export default ContentHeader;
