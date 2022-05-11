import React from "react";
import PropTypes from "prop-types";
import ProgressBar from "../ProgressBar/ProgressBar";
import "./MetaGrupal.css";


const MetaGrupal = ({ user }) => {
  const backGroundProgress =
    "-webkit-linear-gradient(left,rgb(247, 134, 149) 0%, rgb(252, 160, 112)";
  return (
    <div className="card-page inline-top-div container-meta-grupal">
      <p className="title-meta-grupal">Meta grupal</p>
      <ProgressBar
        title={`Leads obtenidos ${user.rank_tier}/${user.leaderboard_rank}`}
        progress={`${Math.round(
          (user.rank_tier * 100) / user.leaderboard_rank
        )}%`}
        width="95%"
        background={backGroundProgress}
      />
      <ProgressBar
        title={`Matriculas realizadas ${user.rank_tier}/${user.leaderboard_rank}`}
        progress={`${Math.round(
          (user.rank_tier * 100) / user.leaderboard_rank
        )}%`}
        width="95%"
        background={backGroundProgress}
      />
    </div>
  );
};

// Documentacion
MetaGrupal.propTypes = {
  user: PropTypes.object.isRequired,
};

export default MetaGrupal;
