import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {selectTodoIds, ToggleToDo, DeleteTodo} from "../../todos/reducers/todosSlice"
import "../../styles/TodoItem.css"
import "animate.css"
import { deleteTodo, updateTodo } from '../../apis/todo';

function TodoItem(props) {
    const todo = useSelector(state => selectTodoIds(state, props.id))
    const dispatch = useDispatch();

    function handleTodo(){
        updateTodo(props.id, {done: !todo.done}).then((response) => {
        dispatch(ToggleToDo(props.id));
        });
    }

    function handleDeleteClick(event){
        deleteTodo(props.id).then((response) =>{
            dispatch(DeleteTodo(props.id));                
        })
        event.stopPropagation(event);

}

    const todoStatus = todo.done ? "done" : "";

    return <div><div onClick={handleTodo}
    className={`TodoItem-todo ${todoStatus} animate__bounceIn`}><h5>{todo.text}
    <button className="btn btn-outline-dark deleteBtn" 
    onClick={handleDeleteClick}>X</button></h5>

    </div></div>;
}

export default TodoItem;