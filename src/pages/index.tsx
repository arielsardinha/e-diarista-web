import SafeEnvironment from "UI/components/feedback/SafeEnvironment/SafeEnvironment";
import PageTitle from "UI/components/data display/PageTitle/PageTitle";
import UseInformation from "UI/components/data display/UserInformation/Useinformation";

export default function Home() {
  return (
    <div>
      <SafeEnvironment />
      <PageTitle
        title={"Conheça os profissionais"}
        subtitle={"preencha seus endereços "}
      />
      <UseInformation
        name={"Ariel Sardinha"}
        picture={"https://github.com/arielsardinha.png"}
        rating={3}
        description={"Rio De Janeiro"}
      />
    </div>
  );
}
