import api from "../apis/api";

export const getTodos = () => {
    return api.get("/todos");
}

export const addTodo = (text) => {
    return api.post("/todos", {text: text, done: false});
}

export const updateTodo = (id, todoItem) => {
    return api.put(`/todos/${id}`, todoItem);
}

export const deleteTodo = (id) => {
    return api.delete(`/todos/${id}`);
}