import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "../features/todos/reducers/todosSlice";

const store = configureStore({
    reduce: {
        todoList: todosReducer
    },
});

export default store;