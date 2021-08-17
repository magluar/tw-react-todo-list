import React from 'react'
import { useState } from 'react';
import "../../styles/TodoForm.css"

function TodoForm() {
    const [text, setText] = useState("");

    function handleChange(event) {
        setText(event.target.value);
    }

    function handlerAdd() {
    }

    return (
        <div className="TodoForm">
            <input type="text"
            placeholder="Input TODO item"
            value={text}
            onChange={handleChange}></input>
            <button id="addBtn"
            onClick={handlerAdd}>Add</button>
        </div>
    )
}

export default TodoForm