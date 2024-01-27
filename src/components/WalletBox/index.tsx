import { useMemo } from "react";
import CountUp from "react-countup";

import dolarImg from "../../assets/dolar.svg";
import arrowUpImg from "../../assets/arrow-up.svg";
import arrowDownImg from "../../assets/arrow-down.svg";

import * as S from "./styles";

interface IWalletBoxProps {
  title: string;
  amount: number;
  footerLabel: string;
  icon: "dolar" | "arrowUp" | "arrowDown";
  color: string;
}

const WalletBox = ({
  title,
  amount,
  footerLabel,
  icon,
  color,
}: IWalletBoxProps) => {
  const iconSelected = useMemo(() => {
    switch (icon) {
      case "dolar":
        return dolarImg;
      case "arrowUp":
        return arrowUpImg;
      case "arrowDown":
        return arrowDownImg;
      default:
        return undefined;
    }
  }, [icon]);
  return (
    <S.Container color={color}>
      <span>{title}</span>
      <h1>
        <strong>R$</strong>
        <CountUp end={amount} separator={"."} decimal={","} decimals={2} />
      </h1>
      <small>{footerLabel}</small>
      <img src={iconSelected} alt={title} />
    </S.Container>
  );
};

export default WalletBox;
