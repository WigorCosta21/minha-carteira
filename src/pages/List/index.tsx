import ContentHeader from "../../components/ContentHeader";
import SelectInput from "../../components/SelectIput";
import * as S from "./styles";

const List = () => {
  const options = [
    { value: "Rodrigo", label: "Rodrigo" },
    { value: "Maria", label: "Maria" },
    { value: "Ana", label: "Ana" },
  ];

  return (
    <ContentHeader title="Dashboard" lineColor="#FFF">
      <SelectInput options={options} />
    </ContentHeader>
  );
};

export default List;
