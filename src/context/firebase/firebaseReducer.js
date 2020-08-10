import Types from './../types';
const handlers = {
    DEFAULT: state=>state,
    [Types.SHOW_LOADER]: state=>({...state, loading:true}),
    [Types.ADD_NOTE]:(state,{payload})=>({...state, notes:[...state.notes, payload]}),
    [Types.FETCH_NOTES]: (state, {payload})=>({...state, notes:payload, loading:false}),
    [Types.REMOVE_NOTE]: (state, {payload})=>({...state, notes:state.notes.filter(note => note.id!==payload)})
}
export const FirebaseReducers=(state, actions)=>{
    const handle=handlers[actions.type] || handlers.DEFAULT
    return(
        handle(state, actions)
    )
}