import React from 'react';
import {TransitionGroup, CSSTransition} from "react-transition-group"

const Notes = ({notes, onRemove}) => {

    return(
        <>
        <TransitionGroup component="ul" className="list-group">
            {notes.map(note=>(<CSSTransition classNames={"note"} timeout={800} key={note.id}><li key={note.id} className="list-group-item note">
                <div className="" >
                    <strong>{note.title}</strong>
                    <span>{note.date}</span>
                </div>
             
            <button onClick={()=>onRemove(note.id)} type="button" class="btn btn-outline-danger btn-delete">&times;</button>

</li>
</CSSTransition>))}

        </TransitionGroup>
        </>
    )
}
export default Notes;