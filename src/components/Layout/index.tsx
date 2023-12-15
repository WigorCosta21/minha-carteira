import Aside from "../Aside";
import Content from "../Content";
import MainHeader from "../MainHeader";

import * as S from "./styles";

const Layout = () => {
  return (
    <S.Grid>
      <MainHeader />
      <Aside />
      <Content />
    </S.Grid>
  );
};

export default Layout;
