// import counterReducer from "./reducer/counterReducer";
// import todoReducer from "./reducer/todoReducer";
import fetchReducer from "./reducer/fetchReducer";
import { createStore,combineReducers,applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
// const store=createStore(counterReducer) //single item storing...
/*const rootReducer=combineReducers({
    counter:counterReducer,
    todo:todoReducer,
    // fetch:
})
const store =createStore(rootReducer)*/
const store=createStore(fetchReducer,applyMiddleware(thunk))
export default store