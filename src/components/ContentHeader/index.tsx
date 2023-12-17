import * as S from "./style";

const ContentHeader = () => {
  return (
    <S.Container>
      <S.TitleContainer>
        <h1>Título</h1>
      </S.TitleContainer>
      <S.Controllers>
        <button type="button">Botão A</button>
        <button type="button">Botão B</button>
      </S.Controllers>
    </S.Container>
  );
};

export default ContentHeader;
