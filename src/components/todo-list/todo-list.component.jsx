import React  from 'react'
import {Todo} from '../todo/todo.component';


export const TodoList = ({todos, handleDelete, handleEdit}) => {
    return (
        <div>
            {
                todos.map(todo => (
                <Todo 
                key={todo.id} 
                id={todo.id}
                todo={todo} 
                handleDelete={handleDelete} 
                handleEdit={handleEdit}
                />))
            }
        </div>
    )
}
