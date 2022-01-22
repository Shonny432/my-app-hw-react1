import { INCREMENT, DECREMENT } from "../constants";

const defaultValues = {
    counter: 0
};

export const counterReducer = (state = defaultValues, action) => {
    switch (action.type) {
        case INCREMENT: {
            return { counter: state.counter + 1 };
        }
        case DECREMENT: {
            return { counter: state.counter - 1 };
        }
        default: {
            return state;
        }
    }
};
