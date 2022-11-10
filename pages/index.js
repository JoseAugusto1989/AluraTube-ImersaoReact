import React from "react";

import config from "../config.json";
import { CSSReset } from "../src/components/CSSReset";
import Header from "../src/components/Header";
import Menu from "../src/components/menu/Menu";
import TimeLine from "../src/components/TimeLine";

const HomePage = () => {
  const [filterValue, setFilterValue] = React.useState("");

  return (
    <>
      <CSSReset />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
        }}
      >
        <Menu filterValue={filterValue} setFilterValue={setFilterValue} />
        <Header />
        <TimeLine searchValue={filterValue} playlists={config.playlist}>
          Conteudo
        </TimeLine>
      </div>
    </>
  );
};

export default HomePage;
