import { COUNTER_NU } from "../types";

const INITIAL_STATE = {
    currentNumber: 0,
};

export default function counter(state = INITIAL_STATE, action) {
    switch (action.type) {
        case COUNTER_NU:
            return {
                ...state,
                currentNumber: action.payload,
            };
        default:
            return state;
    }
}
