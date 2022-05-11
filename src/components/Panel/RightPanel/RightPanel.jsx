import React, { useContext, useState, useEffect } from "react";
import "../ItemRightPanel/ItemRightPanel";
import ItemRightPanel from "../ItemRightPanel/ItemRightPanel";
import playersContext from "../../../context/playerContext/playersContext";

import "./RightPanel.css";

const RightPanel = () => {
  const playersContxt = useContext(playersContext);
  const { proPlayers } = playersContxt;

  // Control del panel derecho...
  const [open, updateOpen] = useState(false);
  const [widthScreen, updateWidth] = useState(false);

  //el evento resize se activará cuando cambie el tamaño de la vista del documento...
  useEffect(() => {
    window.addEventListener("resize", () => {
      setWidth(document.documentElement.clientWidth);
    });
    setWidth(document.documentElement.clientWidth);
    // eslint-disable-next-line
  }, []);

  const setWidth = (widthScreen) => {
    if (widthScreen < 1400) {
      updateWidth(true);
    } else {
      updateWidth(false);
    }
  };

  const handleClick = () => {
    if (widthScreen) {
      updateOpen(!open);
    }
  };

  const styleOpen = {
    width: 135,
    transition: "all 0.2s ease",
    borderRadiusLeftTop: 40,
    borderRadiusLeftBottom: 40,
    zIndex: 20,
  };
  const styleClose = { width: 25, transition: "all 0.2s ease", zIndex: 20 };
  const styleCloseItems = { display: "none" };

  return (
    <div
      style={widthScreen ? (open ? styleOpen : styleClose) : null}
      className="inline-top-div home-right-panel bg-color-primary"
    >
      <div className="container-rigth-panel">
        <div
          onClick={handleClick}
          className="inline-top-div vertical-line-panel"
        ></div>
        <div
          style={widthScreen ? (open ? null : styleCloseItems) : null}
          className="inline-top-div conatiner-items-rigth-panel"
        >
          {proPlayers.map((player) => (
            <ItemRightPanel key={player.account_id} user={player} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RightPanel;
