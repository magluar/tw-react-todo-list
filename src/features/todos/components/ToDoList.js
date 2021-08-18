import React from 'react'
import { useEffect } from 'react'
import TodoForm from './TodoForm'
import TodoGroup from './TodoGroup'
import "../../styles/TodoForm.css"
import { useDispatch, useSelector } from 'react-redux'
import { selectToDoIds, addTodos } from '../reducers/todosSlice'
import { getTodos } from '../../apis/todo'


function ToDoList() {
    const todoIds = useSelector(selectToDoIds);
    const dispatch = useDispatch();

    useEffect(() => {
        getTodos().then((response) => {
            dispatch(addTodos(response.data));
        })
    }, [dispatch])

    return (
        <div>
            <h1>TodoList</h1>
            <TodoGroup/>
            <TodoForm/>
        </div>
    )
}

export default ToDoList;