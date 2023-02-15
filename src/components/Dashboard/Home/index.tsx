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
          {loading || links.length == 0
            ? Array.from(new Array(6)).map((elem, index) => (
                <Loading key={`${index} Load`} />
              ))
            : links &&
              links.map(
                ({ title, url, description, createdAt, id, favorite }) => (
                  <div key={`${title} ${url}`}>
                    <DashCard
                      isFavorite={favorite}
                      id={id}
                      title={title}
                      url={url}
                      description={description}
                      createdAt={createdAt}
                    />
                  </div>
                )
              )}
        </CardList>
      </HomeContainer>
    </>
  );
};

export default DashHome;
