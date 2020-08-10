import React, {useState, useContext} from 'react'
import { AlertContext } from './../context/alert/alertContext';
import { FireBAseContext } from '../context/firebase/firebaseContext';

const Form = () => {
    const [value, setVAlue]= useState("")
    const alert= useContext(AlertContext)
    const fireBAseAddNote=useContext(FireBAseContext)
    const submitHandler=e=>{
        e.preventDefault()
        if(value.trim()){
   fireBAseAddNote.addNotes(value.trim()).then(()=>
   {alert.show("Заметка была создана", "success")}
   ).catch(()=>{
    alert.show("Что то пошло не так ", "danger")
   })
            
            setVAlue("")
        }else{
            alert.show("Введите название заметки")
        }
    }
    return(
        <>
        <form onSubmit={submitHandler}>
            <div className="form-group formInput">
            <input value={value} onChange={e=> setVAlue(e.target.value)} type="text" className="form-control" placeholder="введие задание"/>

            </div>
        </form>
        </>
    )
}

export default Form;