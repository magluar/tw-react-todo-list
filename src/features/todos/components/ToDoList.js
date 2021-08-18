import React from 'react'
import { useEffect } from 'react'
import TodoForm from './TodoForm'
import TodoGroup from './TodoGroup'
import "../../styles/TodoForm.css"
import { useSelector } from 'react-redux'
import { selectToDoIds } from '../reducers/todosSlice'
import { getTodos } from '../../apis/todo'

function ToDoList() {
    const todoIds = useSelector(selectToDoIds);

    useEffect(() => {
        getTodos().then((response) => {
            console.log(response);
        })
    }, [])

    return (
        <div>
            <h1>TodoList</h1>
            <TodoGroup/>
            <TodoForm/>
        </div>
    )
}

export default ToDoList;