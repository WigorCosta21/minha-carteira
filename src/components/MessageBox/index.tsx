import * as S from "./styles";

interface IMessagemBoxProps {
  title: string;
  description: string;
  footerText: string;
  icon: string;
}

const MessageBox = ({
  title,
  description,
  footerText,
  icon,
}: IMessagemBoxProps) => {
  return (
    <S.Container>
      <header>
        <h1>
          {title} <img src={icon} alt={title} />
        </h1>
        <p>{description}</p>
      </header>
      <footer>
        <span>{footerText}</span>
      </footer>
    </S.Container>
  );
};

export default MessageBox;
