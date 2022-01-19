import { createStore } from "redux";

import { backgroundReducer } from "./reducers/background";

export const store = createStore(backgroundReducer);
