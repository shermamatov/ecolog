import { applyMiddleware, combineReducers, createStore } from "redux";
import { thunk } from "redux-thunk";
import { eventReducer } from "./reducers/eventReducer";
import { donateReducer } from "./reducers/donateReducer";
import { authReducer } from "./reducers/authReducer";
import { userReducer } from "./reducers/userReducer";

const rootReducer = combineReducers({
    events: eventReducer,
    donates: donateReducer,
    auth: authReducer,
    users: userReducer,
});
export const store = createStore(rootReducer, applyMiddleware(thunk));
