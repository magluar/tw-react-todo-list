import React from 'react';
import {initialToDoList} from "../../common/constants/constants";
import {getTodoById} from "../../common/utils/utils";

function TodoItem(props) {
    const todo = getTodoById(initialToDoList, props.id);
    return <div> {todo.text} {props.id} {todo.test}</div>;
}

export default TodoItem
