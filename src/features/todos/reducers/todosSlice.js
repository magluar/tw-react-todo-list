import { createSlice , createEntityAdapter} from "@reduxjs/toolkit";
import {v4 as uuid} from "uuid";

const todosAdapter = createEntityAdapter();
const initialState = todosAdapter.getInitialState({
    ids: ["1", "2"],
    entities: {
        "1": {
            id: "1",
            text: "Study",
            done: false,
        },
        "2": {
            id: "2",
            text: "Work",
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
        DeleteTodo() {

        }
    },
});

// export default todosSlice.reducer.AddTodo;

export const {AddTodo} = todosSlice.actions;

export default todosSlice.reducer;

export const{selectIds: selectToDoIds, selectById: selectTodoIds} = todosAdapter.getSelectors(
    (state) => state.todoList
    );