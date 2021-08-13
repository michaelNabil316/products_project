import { FAV_CARD } from "../types";

export const ChangeFavAction = (payload) => {
    return {
        type: FAV_CARD,
        payload,
    };
};