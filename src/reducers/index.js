import { combineReducers } from "redux";

import { postsReducer } from "./posts";
import { counterReducer } from "./counter";

export const rootReducer = combineReducers({
    numbers: counterReducer,
    album: postsReducer
});
