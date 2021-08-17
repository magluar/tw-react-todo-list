import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import "../../styles/TodoForm.css"
import {AddTodo} from "../../todos/reducers/todosSlice"

function TodoForm() {
    const [text, setText] = useState("");
    const dispatch = useDispatch();

    function handleChange(event) {
        setText(event.target.value);
    }

    function handlerAdd() {
        dispatch(AddTodo(text));
        setText("");
    }

    return (
        <div className="TodoForm">
            <input type="text"
            placeholder="Input TODO item"
            value={text}
            onChange={handleChange}></input>
            <div>
                <br></br>
            <button id="addBtn"
            onClick={handlerAdd}>Add</button>
            </div>
        </div>
    )
}

export default TodoForm