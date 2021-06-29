import {TypedUseSelectorHook, useSelector} from "react-redux";
import {RootState} from "../store/reducer";



export const useTypesSelector: TypedUseSelectorHook<RootState> = useSelector
