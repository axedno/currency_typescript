    export interface State {
        currency: any[];
        loading: boolean;
        error: null | string;
    }



    export enum  ActionTypes {
        FETCH = 'FETCH',
        FETCH_SUCCESS = 'FETCH_SUCCESS',
        FETCH_ERROR = 'FETCH_ERROR',
        EDIT = "EDIT"
    }
    interface FetchAction {
        type: ActionTypes.FETCH
    }
    interface FetchSuccessAction {
        type: ActionTypes.FETCH_SUCCESS;
        payload: any[];
    }
    interface FetchErrorAction {
        type: ActionTypes.FETCH_ERROR;
        payload: string
    }
    interface EditAction {
        type: ActionTypes.EDIT;
        payload: any
    }



export type Action = FetchAction | FetchErrorAction | FetchSuccessAction | EditAction
