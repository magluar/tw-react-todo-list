import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../apis/todo';
import "../../styles/TodoForm.css"
import {AddTodo} from "../../todos/reducers/todosSlice"

function TodoForm() {
    const [text, setText] = useState("");
    const dispatch = useDispatch();

    function handleChange(event) {
        setText(event.target.value);
    }

    function handlerAdd() {
        addTodo(text).then((response) => {
            dispatch(AddTodo(response.data));
        })
        setText("");
    }

    return (
        <div className="TodoForm">
                <input type="text" className="form-control addInput" placeholder="Add Todo item" align="center" aria-label="Recipient's username" aria-describedby="button-addon2"
                value={text} onChange={handleChange}></input>
                <br></br>
                <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={handlerAdd}>Add</button>
        </div>
    )
}

export default TodoForm