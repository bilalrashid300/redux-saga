import { combineReducers } from "redux";
import usersReducer from './users'

const reducers = combineReducers({
    usersReducer: usersReducer,
});

export default reducers;