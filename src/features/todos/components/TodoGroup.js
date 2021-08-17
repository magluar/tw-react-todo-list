import React from 'react'
import TodoItem from './TodoItem'
import {initialToDoList} from "../../../common/constants/constants"
import {getAllTodoIds} from "../../../common/utils/utils"

function TodoGroup() {
    return (
        <div>
           TodoGroup
            {
                getAllTodoIds(initialToDoList).map((id) => (
                    <TodoItem key={id} id={id}/>
                ))}
        </div>
    )
}

export default TodoGroup;