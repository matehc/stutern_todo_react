import React from 'react'
import './todo.styles.css';

export const  Todo = ({id, todo, handleDelete, handleEdit}) => {
    return (
        <div className="todo__box ptb-5">
            <div className="todo__text"><span className="text">{todo.todoText}</span></div>
            <button onClick={() => handleEdit(id)} className="btn btn--edit mlr-5 ">Edit
            </button>

            <button onClick={() => handleDelete(id)} className="btn btn--delete mlr-5 ">Delete
            </button>
        </div> 
    )
}
