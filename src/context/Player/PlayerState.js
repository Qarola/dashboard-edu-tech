import React, { useReducer } from "react";
import PlayerContext from "./PlayerContext";
import PlayerReducer from "./PlayerReducer";
import {
  GET_PRO_PLAYERS,
  SAVE_FILTERED_PLAYER,
  SAVE_INFO_USER,
} from "../types/index";
import { filterPlayersByRole } from "../../utils/filterPlayers";
import requestApi from "../../config/axios";

const PlayerState = (props) => {
  const initialState = {
    proPlayers: [],
    filterPlayers: {},
    user: {},
  };
  const [state, dispatch] = useReducer(PlayerReducer, initialState);

  //get pro players
  const getProPlayers = async () => {
    try {
      const res = await requestApi.get('proPlayers');
      const dataApi = res.data.slice(0, 10);
      console.log('soy la dataApi',dataApi)
      const filter = filterPlayersByRole(dataApi);

      dispatch({
        type: GET_PRO_PLAYERS,
        payload: dataApi,
      });
      dispatch({
        type: SAVE_FILTERED_PLAYER,
        payload: filter,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const getPlayerById = async (id) => {
    try {
      const res = await requestApi.get("players/1400303");  /* 109356157 */
     console.log('soy el response', res)
      dispatch({
        type: SAVE_INFO_USER,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <PlayerContext.Provider
      value={{
        proPlayers: state.proPlayers,
        filterPlayers: state.filterPlayers,
        user: state.user,
        getProPlayers,
        getPlayerById,
      }}
    >
      {props.children}
    </PlayerContext.Provider>
  );
};
export default PlayerState;
