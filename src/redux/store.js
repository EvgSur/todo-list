import {combineReducers, createStore} from "redux";
import rootReducer from "./reducer";



const reducers = combineReducers({
    todoState: rootReducer,
});

const store = createStore(reducers);
window.store = store;

export default store;
