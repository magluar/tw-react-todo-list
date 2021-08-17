import { createSlice , createEntityAdapter} from "@reduxjs/toolkit";
// import todoList

const todosAdapter = createEntityAdapter();
const initialState = todosAdapter.getInitialState({
    ids: ["1", "2"],
    entities: {
        "1": {
            id: "1",
            text: "testing",
            done: false,
        },
        "2": {
            id: "2",
            text: "asdfasdf",
            done: false,
        },
    },
    
});

const todosSlice= createSlice({
    name: "todos",
    initialState: initialState,
    reducers: {},
});

export default todosSlice.reducer;

export const{selectIds: selectToDoIds, selectById: selectTodoIds} = todosAdapter.getSelectors(
    (state) => state.todoList
    );