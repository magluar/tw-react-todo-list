import React from 'react'
import { useEffect } from 'react'
import TodoForm from './TodoForm'
import TodoGroup from './TodoGroup'
import "../../styles/TodoForm.css"
import { useDispatch } from 'react-redux'
import { addTodos } from '../reducers/todosSlice'
import { getTodos } from '../../apis/todo'


function ToDoList() {
    const dispatch = useDispatch();

    useEffect(() => {
        getTodos().then((response) => {
            dispatch(addTodos(response.data));
        })
    }, [dispatch])

    return (
        <div className="card marginLeft marginRight marginTop">
        <div className="card-header">
          Todo List
        </div>
        <div className="card-body">
          <TodoGroup/>
          <TodoForm/>
        </div>
      </div>
        )
}

export default ToDoList;