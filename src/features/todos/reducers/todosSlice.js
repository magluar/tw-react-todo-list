import { createSlice , createEntityAdapter, createSelector} from "@reduxjs/toolkit";
import { createSelectorHook } from "react-redux";
import {v4 as uuid} from "uuid";

const todosAdapter = createEntityAdapter();
const initialState = todosAdapter.getInitialState({
    ids: ["1"],
    entities: {
        "1": {
            id: "1",
            text: "Study",
            done: false,
        },
    },
});

const todosSlice= createSlice({
    name: "todos",
    initialState: initialState,
    reducers: {
        AddTodo(state, action) {
            todosAdapter.addOne(state, {
                id: uuid(),
                text: action.payload,
                done: false,
            });
        },
        ToggleToDo(state, action) {
            const todo = state.entities[action.payload];
            todo.done = !todo.done;
        },
    },
});

export const {AddTodo, ToggleToDo} = todosSlice.actions;

export default todosSlice.reducer;

export const{selectIds: selectToDoIds, selectById: selectTodoIds} = todosAdapter.getSelectors(
    (state) => state.todoList
    );

export const doneSelector = createSelector(
    state => state.entities.done === true
);