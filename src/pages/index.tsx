import SafeEnvironment from "UI/components/feedback/SafeEnvironment/SafeEnvironment";
import PageTitle from "UI/components/data display/PageTitle/PageTitle";
import UseInformation from "UI/components/data display/UserInformation/Useinformation";
import TextFieldMask from "UI/components/inputs/TextFieldMask/TextFieldMask";
import {
  Button,
  Typography,
  Container,
  CircularProgress,
} from "@material-ui/core";
import {
  FormElementsContainer,
  ProfissionaisPaper,
  ProfissionaisContainer,
} from "UI/styles/pages/indexStyle";
import useIndex from "data/hooks/pages/useIndex.page";
export default function Home() {
  const {
    cep,
    setCep,
    cepValido,
    buscarProfissionais,
    error,
    diaristas,
    buscaFeita,
    carregando,
    diaristasRestantes,
  } = useIndex();
  return (
    <div>
      <SafeEnvironment />
      <PageTitle
        title={"Conheça os profissionais"}
        subtitle={"preencha seus endereços "}
      />
      <Container>
        <FormElementsContainer>
          <TextFieldMask
            mask={"999.999-99"}
            label={"Digite seu CEP"}
            fullWidth
            variant={"outlined"}
            value={cep}
            onChange={(event) => setCep(event.target.value)}
          />
          {cepValido}
          {error && <Typography color={"error"}>{error}</Typography>}
          <Button
            variant={"contained"}
            color={"secondary"}
            sx={{ width: "200px" }}
            disabled={!cepValido || carregando}
            onClick={() => buscarProfissionais(cep)}
          >
            {carregando ? <CircularProgress size={20} /> : "Buscar"}
          </Button>
        </FormElementsContainer>
        {buscaFeita &&
          (diaristas.length > 0 ? (
            <ProfissionaisPaper>
              <ProfissionaisContainer>
                {diaristas.map((item, index) => {
                  return (
                    <UseInformation
                      key={index}
                      name={item.nome_completo}
                      picture={item.foto_usuario}
                      rating={item.reputacao}
                      description={item.cidade}
                    />
                  );
                })}
              </ProfissionaisContainer>
              <Container sx={{ textAlign: "center" }}>
                {diaristasRestantes > 0 && (
                  <Typography sx={{ mt: 5 }}>
                    ...e mais {diaristasRestantes}{" "}
                    {diaristasRestantes > 1
                      ? "profissionais atendem"
                      : "profissional atende"}{" "}
                    ao seu endereço.
                  </Typography>
                )}
                <Button
                  variant={"contained"}
                  color={"secondary"}
                  sx={{ mt: 5 }}
                >
                  Contratar um profissional
                </Button>
              </Container>
            </ProfissionaisPaper>
          ) : (
            <Typography align={"center"} color={"textPrimary"}>
              Ainda não temos nenhuma diarista disponvel em sua região
            </Typography>
          ))}
      </Container>
    </div>
  );
}
