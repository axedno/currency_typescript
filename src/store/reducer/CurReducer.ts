import {Action, ActionTypes, State} from "../../types/currency";


const initialState: State = {
    currency: [],
    error: null,
    loading: false,
}


export const CurReducer = (state = initialState, action: Action): State => {
    let currency = [...state.currency];
    switch (action.type){
        case ActionTypes.FETCH:
            return {...state, loading: true}
        case ActionTypes.FETCH_SUCCESS:
            return {...state, loading: false, currency: action.payload}
        case ActionTypes.FETCH_ERROR:
            return {...state, loading: false, error: action.payload}
        case ActionTypes.EDIT:
             currency.map((item, index) => {
                if(index === action.payload.index) {
                      item.buy = action.payload.page.buy
                      item.sale = action.payload.page.sale
                }
            })
            return {...state, currency: currency}
        default:
            return state
}
}
