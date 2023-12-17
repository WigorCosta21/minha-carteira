import ContentHeader from "../../components/ContentHeader";
import SelectInput from "../../components/SelectIput";
import * as S from "./style";

const Dashboard = () => {
  const options = [
    { value: "Rodrigo", label: "Rodrigo" },
    { value: "Maria", label: "Maria" },
    { value: "Ana", label: "Ana" },
  ];

  return (
    <S.Container>
      <ContentHeader title="Dashboard" lineColor="#FFF">
        <SelectInput options={options} />
      </ContentHeader>
    </S.Container>
  );
};

export default Dashboard;
