import React from 'react'
import TodoItem from './TodoItem'
import {initialToDoList} from "../../../common/constants/constants"
import {getAllTodoIds} from "../../../common/utils/utils"
import {selectToDoIds} from "../reducers/todosSlice"
import { useSelector } from 'react-redux'

function TodoGroup() {
    const todoIds = useSelector(selectToDoIds);

    return (
        <div>
            {
                todoIds.map((id) => (
                    <TodoItem key={id} id={id}/>
                ))}
        </div>
    )
}

export default TodoGroup;