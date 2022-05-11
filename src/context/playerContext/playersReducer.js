import { GET_PRO_PLAYERS, SAVE_FILTERED_PLAYERS, SAVE_INFO_USER } from "../types/index";
// eslint-disable-next-line
export default (state, action) => {
    switch (action.type) {
        case GET_PRO_PLAYERS:
            return {
                ...state,
                proPlayers: action.payload
            }
        case SAVE_FILTERED_PLAYERS:
            return {
                ...state,
                filterPlayers: action.payload
            }
        case SAVE_INFO_USER:
            return {
                ...state,
                user: action.payload
            }
        default:
            return { ...state };
    };
};