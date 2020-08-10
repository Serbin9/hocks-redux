import React, {useReducer} from 'react'
import { AlertContext } from './alertContext';
import { alertReducer } from './alertReducer';
import Types from './../types';

const AlertState = ({children}) =>{
    const [state, dispatch]= useReducer(alertReducer, {visible:false})
    const show =(text, type="warning")=>{
        dispatch({
            type:Types.SHOW_ALERT,
            payload: {text, type}
        })
    }
    const hide =()=>{
        dispatch({type:Types.HIDE_ALERT})
    }
    return(
        <AlertContext.Provider value={{show, hide, alert:state}}>
            {children}
        </AlertContext.Provider>


    )
}


export default AlertState;