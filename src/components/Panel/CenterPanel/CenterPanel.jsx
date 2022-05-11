import React, { useContext } from "react";
import FilterIcon from "../../../assets/FilterIcon.svg";
import LeadsStats from "../LeadsStats/LeadsStats";
import MetaGrupal from "../MetaGrupal/MetaGrupal";
import AgendaHoy from "../AgendaHoy/AgendaHoy";
import PlanHoy from "../PlanHoy/PlanHoy";
import InlineDatePicker from "./DatePicker";
import "./CenterPanel.css";

// Contextos
import playersContext from "../../../context/playerContext/playersContext";

const CenterPanel = () => {
  const playersContxt = useContext(playersContext);
  let { user } = playersContxt;
  if (user.profile === undefined)
    user = { profile: { name: "" }, rank_tier: 0, leaderboard_rank: 0 };

  return (
    <div className="inline-top-div home-center-panel bg-color-primary">
      <div className="container-center-panel">
        <div className="container-search">
          <input className="input-search" type="text" placeholder="Search" />
          <img className="icon-search" src={FilterIcon} alt=" searching icon" />
         <div className="date-right"><InlineDatePicker /></div>
        </div>
        <h1>Hola, {user.profile.name}</h1>
        <LeadsStats user={user} />
        {user ? <MetaGrupal user={user} /> : null}

        <div>
          <AgendaHoy />
          <PlanHoy />
        </div>
      </div>
    </div>
  );
};

export default CenterPanel;
