import Header from "../src/components/Header";
import Menu from "../src/components/Menu";
import TimeLine from "../src/components/TimeLine";
import config from "../config.json";
import { CSSReset } from "../src/components/CSSReset";

const HomePage = () => {
  return (
    <>
      <CSSReset />
      <div>
        <Menu />
        <Header />
        <TimeLine playlists={config.playlist}>Conteudo</TimeLine>
      </div>
    </>
  );
};

export default HomePage;
