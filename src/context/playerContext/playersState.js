import React, { useReducer } from "react";
import playersContext from "./playersContext";
import playersReducer from "./playersReducer";
import * as types from "../types/index";
import requestApi from "../../config/index";
import { filterPlayersByRole } from "../../utils/filterPlayers";

const PlayersState = (props) => {
  const initialState = {
    proPlayers: [],
    filterPlayers: {},
    user: {},
  };

  const [state, dispatch] = useReducer(playersReducer, initialState);

  // Obtener pro players
  const getProPlayers = async () => {
    try {
      const res = await requestApi.get("proPlayers");
      // console.log('soy el response', res)
      //me traerá 5 elementos...
      const dataApi = res.data.slice(5, 10);
      //console.log('soy dataApi', dataApi)
      const filter = filterPlayersByRole(dataApi);
      dispatch({
        type: types.GET_PRO_PLAYERS,
        payload: dataApi,
      });
      dispatch({
        type: types.SAVE_FILTERED_PLAYERS,
        payload: filter,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const getPlayerById = async () => {
    try {
      const resp = await requestApi.get("players/1400303");
      //console.log('soy resp', resp)
      dispatch({
        type: types.SAVE_INFO_USER,
        payload: resp.data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <playersContext.Provider
      value={{
        proPlayers: state.proPlayers,
        filterPlayers: state.filterPlayers,
        user: state.user,
        getProPlayers,
        getPlayerById,
      }}
    >
      {props.children}
    </playersContext.Provider>
  );
};

export default PlayersState;
