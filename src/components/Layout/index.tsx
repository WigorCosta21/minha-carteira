import { ReactNode } from "react";
import Aside from "../Aside";
import Content from "../Content";
import MainHeader from "../MainHeader";

import * as S from "./styles";

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => (
  <S.Grid>
    <MainHeader />
    <Aside />
    <Content>{children}</Content>
  </S.Grid>
);

export default Layout;
