import { createStore, combineReducers } from "redux"
import { allReducer } from "./all-reducer"

const Reducers = combineReducers({
    all: allReducer,
})

export const store = createStore(Reducers)
