import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {selectTodoIds, ToggleToDo} from "../../todos/reducers/todosSlice"
import "../../styles/TodoItem.css"

function TodoItem(props) {
    const todo = useSelector(state => selectTodoIds(state, props.id))
    const dispatch = useDispatch();

    function handleClick(){
        dispatch(ToggleToDo(props.id));
    }

    const todoStatus = todo.done ? "done" : "";

    return <div><div onClick={handleClick}
    className={`TodoItem-todo ${todoStatus}`}>{todo.text}<span id="deleteBtn">X</span></div></div>;
}

export default TodoItem;