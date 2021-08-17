import React from 'react'
import TodoForm from './TodoForm'
import TodoGroup from './TodoGroup'
import "../../styles/TodoForm.css"

function ToDoList() {
    return (
        <div>
            <h1>TodoList</h1>
            <TodoGroup/>
            <TodoForm/>
        </div>
    )
}

export default ToDoList;