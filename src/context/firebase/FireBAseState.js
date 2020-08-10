import React, {useReducer} from 'react'
import { FireBAseContext } from './firebaseContext'
import { FirebaseReducers } from './firebaseReducer';
import axios from "axios"
import Types from './../types';

const url = process.env.REACT_APP_DB_URL
export const FireBaseState=({children})=>{
    const initialState={
        notes:[],
        loading:false
    }
    const [state, dispatch]= useReducer(FirebaseReducers, initialState)
    const showLoader =()=> dispatch({type:Types.SHOW_LOADER})
    const fetchNotes= async ()=>{
        showLoader()
        const res = await axios.get(`${url}/notes.json`)
        const payload = Object.keys(res.data).map(key=>{
            return{
                ...res.data[key],
                id:key
            }
        })
        dispatch({
            type: Types.FETCH_NOTES, payload
        })
    }
    const addNotes = async(title)=>{
        const note={
            title,
            data: new Date().toJSON()
        }
        try{
            const res = await axios.post(`${url}/notes.json`, note)
            console.log("resAdd", res.data )
            const payload ={...note, id:res.data.name}
            dispatch({
                type:Types.ADD_NOTE,
                payload: payload
            })
        }catch (e){
            throw new Error(e.message)
        }

    }
    const removeNotes = async (id)=>{
        await axios.delete(`${url}/notes/${id}.json`)
        dispatch({type:Types.REMOVE_NOTE, 
            payload:id})
    }
return(
    <FireBAseContext.Provider value={{
        showLoader, removeNotes, fetchNotes, 
        addNotes, loading:state.loading, notes:state.notes}}>
        {children}
    </FireBAseContext.Provider>
)
}