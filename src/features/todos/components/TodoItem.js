import React from 'react';
import { useSelector } from 'react-redux';
import { initialToDoList } from '../../../common/constants/constants';
import {getTodoById} from "../../../common/utils/utils"
import {selectTodoIds} from "../../todos/reducers/todosSlice"

function TodoItem(props) {
    const todo = useSelector(state => selectTodoIds(state, props.id))
    // const todo = getTodoById(initialToDoList, props.id);
    return <div> {todo.text}</div>;
}

export default TodoItem;