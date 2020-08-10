import React,{useContext, useEffect} from 'react'
import Form from './../component/Form';
import Notes from './../component/Notes';
import { FireBAseContext } from '../context/firebase/firebaseContext';
import Loader from '../component/Loader';
const Home = () => {
    const {loading, notes, fetchNotes, removeNotes}= useContext(FireBAseContext)

    useEffect(()=>{fetchNotes()
        // eslint-disable-next-line
    },[])
    return(
        <>
        <Form/>
        {loading ? <Loader/> : <Notes notes={notes} onRemove={removeNotes}/>}
        </>
    )
}

export default Home;