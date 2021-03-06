import { combineReducers, createStore } from "redux";
import { counterReducer } from "../reducers/counterReducer/counterReducer";


const rootReducer = combineReducers({
    counterState: counterReducer
})

export type AppStateType = ReturnType<typeof rootReducer>

const store = createStore(rootReducer)

export default store;