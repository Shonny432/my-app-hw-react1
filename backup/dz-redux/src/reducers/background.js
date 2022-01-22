import { MAKE_GREEN, MAKE_RED, MAKE_BLUE } from "../constants";

const defaultValues = {
    //buttonColor: "none"
};

export const backgroundReducer = (state = defaultValues, action) => {
    switch (action.type) {
        case MAKE_GREEN: {
            return { buttonColor: "green" };
        }
        case MAKE_RED: {
            return { buttonColor: "red" };
        }
        case MAKE_BLUE: {
            return { buttonColor: "blue" };
        }
        default: {
            return state;
        }
    }
};
