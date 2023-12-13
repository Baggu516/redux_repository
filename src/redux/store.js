import counterReducer from "./reducer/counterReducer";
import { createStore } from "redux";

const store=createStore(counterReducer)
export default store