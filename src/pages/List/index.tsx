import ContentHeader from "../../components/ContentHeader";
import HistoryFinanceCard from "../../components/HistoryFinanceCard";
import SelectInput from "../../components/SelectIput";
import * as S from "./styles";

const List = () => {
  const options = [
    { value: "Rodrigo", label: "Rodrigo" },
    { value: "Maria", label: "Maria" },
    { value: "Ana", label: "Ana" },
  ];

  return (
    <S.Container>
      <ContentHeader title="Saídas" lineColor="#E44C4E">
        <SelectInput options={options} />
      </ContentHeader>

      <S.Content>
        <HistoryFinanceCard
          cardColor="#313862"
          tagColor="#E44C4E"
          title="Conta de Luz"
          subtitle="17/12/2023"
          amount="R$ 130,00"
        />
        <HistoryFinanceCard
          cardColor="#313862"
          tagColor="#E44C4E"
          title="Conta de Luz"
          subtitle="17/12/2023"
          amount="R$ 130,00"
        />
        <HistoryFinanceCard
          cardColor="#313862"
          tagColor="#E44C4E"
          title="Conta de Luz"
          subtitle="17/12/2023"
          amount="R$ 130,00"
        />
        <HistoryFinanceCard
          cardColor="#313862"
          tagColor="#E44C4E"
          title="Conta de Luz"
          subtitle="17/12/2023"
          amount="R$ 130,00"
        />
        <HistoryFinanceCard
          cardColor="#313862"
          tagColor="#E44C4E"
          title="Conta de Luz"
          subtitle="17/12/2023"
          amount="R$ 130,00"
        />
        <HistoryFinanceCard
          cardColor="#313862"
          tagColor="#E44C4E"
          title="Conta de Luz"
          subtitle="17/12/2023"
          amount="R$ 130,00"
        />
        <HistoryFinanceCard
          cardColor="#313862"
          tagColor="#E44C4E"
          title="Conta de Luz"
          subtitle="17/12/2023"
          amount="R$ 130,00"
        />
        <HistoryFinanceCard
          cardColor="#313862"
          tagColor="#E44C4E"
          title="Conta de Luz"
          subtitle="17/12/2023"
          amount="R$ 130,00"
        />
        <HistoryFinanceCard
          cardColor="#313862"
          tagColor="#E44C4E"
          title="Conta de Luz"
          subtitle="17/12/2023"
          amount="R$ 130,00"
        />
        <HistoryFinanceCard
          cardColor="#313862"
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
