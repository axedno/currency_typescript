import {Dispatch} from "redux";
import axios from "axios";
import { Action, ActionTypes } from "../../types/currency";




const getCount: any  = localStorage.getItem('key')


export  const fetch = () => {

    return async (dispatch: Dispatch<Action>) => {
        try {
            const num: number = 1 + +(getCount)
            localStorage.setItem('key', JSON.stringify(num))
            dispatch({type: ActionTypes.FETCH  })
           if(num <= 5){
               const response = await axios.get('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5')

               setTimeout(() => {
                   dispatch({type: ActionTypes.FETCH_SUCCESS, payload: response.data})
               }, 500)
            } else {
               localStorage.setItem('key', JSON.stringify(0))

               const response = await axios.get('https://api.prvatbank.ua/p24api/pubinfo?json&exchange&coursid=5')

               setTimeout(() => {
                   dispatch({type: ActionTypes.FETCH_SUCCESS, payload: response.data})
               }, 500)
            }


        } catch (e) {
            dispatch({type: ActionTypes.FETCH_ERROR, payload: 'Произошла ошибка. Перезагрузите страницу.'})
        }
    }
}

export function  setPage(page:object, index: number):Action {
    const obj = {
        page:page,
        index: index
    }
    return {type: ActionTypes.EDIT, payload: obj}
}
