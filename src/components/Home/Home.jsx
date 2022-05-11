import React, { Fragment, useEffect, useContext } from "react";
import LeftPanel from "../Panel/LeftPanel/LeftPanel";
import CenterPanel from "../Panel/CenterPanel/CenterPanel";
import RightPanel from "../Panel/RightPanel/RightPanel";
import playersContext from "../../context/playerContext/playersContext";
import "./Home.css";

const Home = () => {
  const playersContxt = useContext(playersContext);
  const { getProPlayers, getPlayerById } = playersContxt;

  useEffect(() => {
    getProPlayers();
    getPlayerById();
    // eslint-disable-next-line
  }, []);

  return (
    <Fragment>
      <LeftPanel />
      <CenterPanel />
      <RightPanel />
    </Fragment>
  );
};

export default Home;
