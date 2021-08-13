import { COUNTER_NU } from "../types";

export const ChangeNumberAction = (payload) => {
    return {
        type: COUNTER_NU,
        payload,
    };
};
