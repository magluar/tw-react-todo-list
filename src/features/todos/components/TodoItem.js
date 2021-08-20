import { useDispatch, useSelector } from 'react-redux';
import { selectTodoIds, ToggleToDo, DeleteTodo, updateTodoItem } from "../../todos/reducers/todosSlice"
import "../../styles/TodoItem.css"
import "animate.css"
import { deleteTodo, updateTodo } from '../../apis/todo';
import { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap'

function TodoItem(props) {
    const todo = useSelector(state => selectTodoIds(state, props.id))
    const [text, setText] = useState(todo.text);
    const dispatch = useDispatch();
    const todoStatus = todo.done ? "done" : "";

    const [show, setShow] = useState(false);
    const handleClose = () => {
        handleEdit();
        setShow(false);
    }
    const handleShow = () => setShow(true);

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
        setText(event.target.value);
        console.log("text: ", text);
    }

    return (<div>
        <div>
            <button type="button" className={`editBtn ${todoStatus} btn btn-outline-dark`}
                onClick={handleShow}><i className="bi bi-pen"></i></button>
            <div onClick={handleTodo}
                className={`TodoItem-todo ${todoStatus} animate__animated animate__bounceIn`}><h5>{todo.text}
                    <button className="btn btn-outline-dark deleteBtn"
                        onClick={handleDeleteClick}><i className="bi bi-trash"></i>
                    </button></h5>
            </div>
        </div>

        <Modal show={show} onHide={handleClose}>
            <Modal.Header>
                <Modal.Title>Edit Todo Item</Modal.Title>
            </Modal.Header>
            <Modal.Body><Form.Control as="textarea" id="text-area" value={text} onChange={handleTextChange} /></Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    </div>)
}

export default TodoItem;