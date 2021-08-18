import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {selectTodoIds, ToggleToDo, DeleteTodo} from "../../todos/reducers/todosSlice"
import "../../styles/TodoItem.css"
import { updateTodo } from '../../apis/todo';

function TodoItem(props) {
    const todo = useSelector(state => selectTodoIds(state, props.id))
    const dispatch = useDispatch();

    function handleTodo(){
        updateTodo(props.id, {done: !todo.done}).then((response) => {
            console.log(response);
        dispatch(ToggleToDo(props.id));
        });
    }

    function handleDeleteClick(event){
        event.stopPropagation(event);
        dispatch(DeleteTodo(props.id));
    }

    const todoStatus = todo.done ? "done" : "";

    return <div><div onClick={handleTodo}
    className={`TodoItem-todo ${todoStatus}`}>{todo.text}<span id="deleteBtn" 
    onClick={handleDeleteClick}>X</span></div></div>;
}

export default TodoItem;