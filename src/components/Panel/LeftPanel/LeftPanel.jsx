import React, { useContext } from "react";
import playersContext from "../../../context/playerContext/playersContext";
import kuepaIcon from "../../../assets/kuepa_icon.png";
import HomeIcon from "@material-ui/icons/Home";
import ReceiptIcon from "@material-ui/icons/Receipt";
import BooksIcon from "@material-ui/icons/LibraryBooks";
import ChatIcon from "@material-ui/icons/ChatBubbleOutline";
import "./LeftPanel.css";

const LeftPanel = () => {
  const playersContxt = useContext(playersContext);
  let { user } = playersContxt;
  if (user.profile === undefined) user = { profile: { avatar: "" } };

  return (
    <div className="inline-top-div home-left-panel bg-color-primary">
      <div className="containere-left-panel">
        <img
          src={kuepaIcon}
          className="img-title-panel-left"
          alt="Icono Kuepa"
        />
        <div className="container-icon">
          <HomeIcon />
        </div>
        <div className="container-icon">
          <ReceiptIcon style={{ color: "#e16d3a" }} />
        </div>
        <div className="container-icon">
          <BooksIcon />
        </div>
        <div className="container-icon msg-icon">
          <ChatIcon />
        </div>
        <div className="container-picture-panel">
          <img
            className="picture-panel"
            src={user.profile.avatar}
            alt="Foto usuario"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default LeftPanel;
