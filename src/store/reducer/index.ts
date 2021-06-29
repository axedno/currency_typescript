import {combineReducers} from "redux";
import {CurReducer} from "./CurReducer";



export const rootReducer = combineReducers({
    currency: CurReducer
})

export type RootState = ReturnType<typeof rootReducer>
