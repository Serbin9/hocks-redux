import Types from './../types';
const handlers = {
    [Types.SHOW_ALERT]: (state, {payload})=>({...payload, visible:true}),
    [Types.HIDE_ALERT]: state =>({...state, visible:false}),
    DEFAULT: state=> state

}

export const alertReducer =(state, actions)=>{
const handl=handlers[actions.type] || handlers.DEFAULT
return handl (state, actions)
}