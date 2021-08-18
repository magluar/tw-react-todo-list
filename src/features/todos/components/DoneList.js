import React from 'react'
import todosSlice, { selectDoneList } from '../reducers/todosSlice';
import { useSelector } from 'react-redux'
import TodoItem from './TodoItem';

function DoneList() {
    const todoIds = useSelector(selectDoneList);

    return (
        <div>{
            todoIds.map((todoIds) => (
                <TodoItem key={todoIds.id} id={todoIds.id}/>
            ))}
        </div>
    )
}

export default DoneList
