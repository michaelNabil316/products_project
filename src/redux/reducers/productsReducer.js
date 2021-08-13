
const INITIAL_STATE = {
    productsList: [],
};

export default function products(state = INITIAL_STATE, action) {
    switch (action.type) {
        case "GET_PRODUCTS":
            return {
                ...state,
                productsList: action.payload,
            };
        default:
            return state;
    }
}
