import { createStore, combineReducers } from "redux"
import { customChartsReducer } from "./custom-charts-reducer"
import {allChartsReducer} from "./all-charts-reducer";

const Reducers = combineReducers({
    custom: customChartsReducer,
    all: allChartsReducer
})

export const store = createStore(Reducers)
