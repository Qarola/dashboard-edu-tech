import React from "react";
import faceIcon from "../../../assets/facebook_icon.png";
import wpIcon from "../../../assets/whatsapp_icon.png";
import PropTypes from "prop-types";
import moment from "moment";

import "./ItemRightPanel.css";

let timesAgo = moment("2022-05-09T18:18:00-05:00").fromNow();

const ItemRightPanel = ({ user }) => {
  return (
    <div className="inline-top-div conatiner-item-rigth-panel">
      {user.fantasy_role === 2 ? (
        <img src={wpIcon} className="icon-item-rigth-panel" alt="" />
      ) : (
        <img src={faceIcon} className="icon-item-rigth-panel" alt="" />
      )}
      <div className="header-item-rigth-panel">
        {user.fantasy_role === 2 ? <p>Whatsapp</p> : <p>Facebook</p>}
      </div>
      {user ? <p className="text-name-item">{user.name}</p> : null}
      {user ? <p className="text-time-item">{timesAgo}</p> : null}
    </div>
  );
};

// Documentacion
ItemRightPanel.propTypes = {
  user: PropTypes.object.isRequired,
};

export default ItemRightPanel;
