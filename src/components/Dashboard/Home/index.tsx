import Text from "../../../styles/Typography";
import Toolbar from "@mui/material/Toolbar";
import DashCard from "../../LinkCard";
import FormCard from "../FormCard";
import Loading from "../../Loading";
import { useDashContext } from "../../../contexts/DashContext";
import { CardList, HomeContainer } from "./style";

const DashHome = () => {
  const { user, loading } = useDashContext();
  const { name, links } = user;

  return (
    <>
      <Text tag="h2">Bem-vindo novamente, {name}!</Text>
      <Toolbar />
      <HomeContainer>
        <FormCard />
        <CardList>
          {loading
            ? Array.from(new Array(8)).map((elem, index) => (
                <Loading key={`${index} load`} />
              ))
            : links &&
              links.map(
                ({ title, url, description, createdAt, id, favorite }) => (
                  <DashCard
                    isFavorite={favorite}
                    id={id}
                    title={title}
                    url={url}
                    description={description}
                    createdAt={createdAt}
                    key={title}
                  />
                )
              )}
        </CardList>
      </HomeContainer>
    </>
  );
};

export default DashHome;
