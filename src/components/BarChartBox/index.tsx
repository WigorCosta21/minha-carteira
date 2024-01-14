import { ResponsiveContainer, BarChart, Bar, Cell, Tooltip } from "recharts";

import * as S from "./styles";
import formatCurrency from "../../utils/formatCurrency";

interface IBarChartBox {
  title: string;
  data: {
    name: string;
    amount: number;
    percent: number;
    color: string;
  }[];
}

const BarChartBox = ({ title, data }: IBarChartBox) => {
  return (
    <S.Container>
      <S.SideLeft>
        <h2>{title}</h2>
        <S.LegendContainer>
          {data.map((indicator) => (
            <S.Legend key={indicator.name} color={indicator.color}>
              <div>{indicator.percent}%</div>
              <span>{indicator.name}</span>
            </S.Legend>
          ))}
        </S.LegendContainer>
      </S.SideLeft>
      <S.SideRight>
        <ResponsiveContainer>
          <BarChart data={data}>
            <Bar dataKey="amount" name="Valor">
              {data.map((indicator) => (
                <Cell key={indicator.name} fill={indicator.color} />
              ))}
            </Bar>
            <Tooltip
              cursor={{ fill: "none" }}
              formatter={(value) => formatCurrency(Number(value))}
            />
          </BarChart>
        </ResponsiveContainer>
      </S.SideRight>
    </S.Container>
  );
};

export default BarChartBox;
