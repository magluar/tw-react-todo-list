import { useDispatch, useSelector } from 'react-redux';
import { selectTodoIds, ToggleToDo, DeleteTodo, updateTodoItem } from "../../todos/reducers/todosSlice"
import "../../styles/TodoItem.css"
import "animate.css"
import { deleteTodo, updateTodo } from '../../apis/todo';
import { useState } from 'react';

function TodoItem(props) {
    const todo = useSelector(state => selectTodoIds(state, props.id))
    const [text, setText] = useState(todo.text);
    const dispatch = useDispatch();

    function handleTodo() {
        updateTodo(props.id, { done: !todo.done }).then(() => {
            dispatch(ToggleToDo(props.id));
        });
    }

    function handleDeleteClick(event) {
        deleteTodo(props.id).then(() => {
            dispatch(DeleteTodo(props.id));
        })
        event.stopPropagation(event);
    }

    function handleEdit() {
        updateTodo(props.id, {text}).then((response) => {
            dispatch(updateTodoItem(response.data));
        });
    }
    function handleTextChange(event) {
        const newText = event.target.value;
        if (newText.length !== 0) {
            setText(newText);
        }
        console.log("newText: ", newText);
        console.log("text: ", text);
    }
    // var x = document.getElementById("text-area").value;
    const todoStatus = todo.done ? "done" : "";

    return (<div>
        <div>
            <button type="button" className={`editBtn ${todoStatus} btn btn-outline-dark`}
                data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={handleEdit}><i className="bi bi-pen"></i></button>
            <div onClick={handleTodo}
                className={`TodoItem-todo ${todoStatus} ananimate__bounceIn`}><h5>{todo.text}
                    <button className="btn btn-outline-dark deleteBtn"
                        onClick={handleDeleteClick}><i className="bi bi-trash"></i>
                    </button></h5>
            </div>
        </div>

        {/* Modal */}
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Edit Todo Item</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <input className="form-control" onChange={handleTextChange} defaultValue={text}></input>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary" onClick={handleEdit}>Save changes</button>
                    </div>
                </div>
            </div>
        </div>
    </div>)
}

export default TodoItem;