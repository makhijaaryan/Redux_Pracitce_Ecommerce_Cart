const INIT_STATE = {
    carts: []
};

export const cartReducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case "ADD_CART":
            const itemIndex = state.carts.findIndex((item) => item.id === action.payload.id)
            if (itemIndex >= 0) {
                state.carts[itemIndex].qnty += 1
            }
            else {
                const temp = { ...action.payload, qnty: 1 }
                return {
                    ...state,
                    carts: [...state.carts, temp]
                }
            }


        // eslint-disable-next-line
        case "REMOVE_CART":
            const data = state.carts.filter((ele) => ele.id !== action.payload)
            return {
                ...state,
                carts: data
            }



        case "REMOVE_ONE":
            const itemIndex_Reduce = state.carts.findIndex((item) => item.id === action.payload.id)
            if (state.carts[itemIndex_Reduce].qnty > 1) {
                state.carts[itemIndex_Reduce].qnty -= 1;

                return {
                    ...state,
                    carts: [...state.carts]
                }
            } else if (state.carts[itemIndex_Reduce].qnty >= 1) {
                const data = state.carts.filter((ele) => ele.id !== action.payload)
                return {
                    ...state,
                    carts: data
                }
            }

        // eslint-disable-next-line
        default:
            return state
    }
}