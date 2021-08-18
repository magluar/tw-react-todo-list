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
        // <div>
        //     <h1>TodoList</h1>
        //     <TodoGroup/>
        //     <TodoForm/>
        // </div>
        <div className="card marginLeft marginRight marginTop">
        <div className="card-header">
          Todo List
        </div>
        <div className="card-body">
          {/* <p className="card-text">With supporting text below as a natural lead-in to additional content.</p> */}
          <TodoGroup/>
          <TodoForm/>
          {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
        </div>
      </div>
        )
}

export default ToDoList;