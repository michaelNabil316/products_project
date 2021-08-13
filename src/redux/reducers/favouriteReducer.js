import { FAV_CARD } from "../types";

const INITIAL_STATE = {
    currentFav: []
};

export default function favorites(state = INITIAL_STATE, action) {
    switch (action.type) {
        case FAV_CARD:
            return {
                ...state,
                currentFav: [...state.currentFav, action.payload],
            };
        default:
            return state;
    }
}
