import CollapsibleTable from "../../FavoriteTable";
import NoticeDialog from "../../NoticeDialog";

const DashFavorite = () => {
  return (
    <>
      <NoticeDialog text="Nossa plataforma utiliza uma técnica de raspagem para encontrar os três primeiros artigos relacionados aos links salvos por você. No momento, a precisão do nosso sistema é de 70%, de acordo com nossos testes. Isso significa que alguns artigos podem não ser incluídos na nossa plataforma." />
      <CollapsibleTable />
    </>
  );
};

export default DashFavorite;
