import { useMemo } from "react";
import ContentHeader from "../../components/ContentHeader";
import HistoryFinanceCard from "../../components/HistoryFinanceCard";
import SelectInput from "../../components/SelectIput";
import * as S from "./styles";
import { useParams } from "react-router-dom";

const List = () => {
  const { type } = useParams();

  const title = useMemo(() => {
    return type === "entry-balance" ? "Entradas" : "Saídas";
  }, [type]);

  const LineColor = useMemo(() => {
    return type === "entry-balance" ? "#F7931B" : "#E44C4E";
  }, [type]);

  const months = [
    { value: 1, label: "Janeiro" },
    { value: 2, label: "Fevereiro" },
    { value: 3, label: "Março" },
  ];

  const years = [
    { value: 2024, label: 2024 },
    { value: 2025, label: 2025 },
    { value: 2026, label: 2026 },
  ];

  return (
    <S.Container>
      <ContentHeader title={title} linecolor={LineColor}>
        <SelectInput options={months} />
        <SelectInput options={years} />
      </ContentHeader>

      <S.Filters>
        <button type="button" className="tag-filter tag-filter-recurrent">
          Recorrentes
        </button>
        <button type="button" className="tag-filter tag-filter-eventual">
          Eventuais
        </button>
      </S.Filters>

      <S.Content>
        <HistoryFinanceCard
          tagColor="#E44C4E"
          title="Conta de Luz"
          subtitle="17/12/2023"
          amount="R$ 130,00"
        />
      </S.Content>
    </S.Container>
  );
};

export default List;
