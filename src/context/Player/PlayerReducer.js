import { GET_PRO_PLAYERS, SAVE_FILTERED_PLAYER, SAVE_INFO_USER } from "../types/index";


// eslint-disable-next-line
export default (state, action) => {
    const { payload, type } = action;
    switch (type) {
        case GET_PRO_PLAYERS:
            return {
                ...state,
                proPlayer: payload
            }
        case SAVE_FILTERED_PLAYER:
            return {
                ...state,
                filterPlayer: payload
            }
        case SAVE_INFO_USER:
            return {
                ...state,
                user: payload
            }
        default:
            return { ...state };
    };
};