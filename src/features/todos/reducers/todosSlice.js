import { createSlice , createEntityAdapter, createSelector} from "@reduxjs/toolkit";

const todosAdapter = createEntityAdapter();

const initialState = todosAdapter.getInitialState();

const todosSlice= createSlice({
    name: "todos",
    initialState: initialState,
    reducers: {
        AddTodo(state, action) {
            todosAdapter.addOne(state, action.payload);
        },
        ToggleToDo(state, action) {
            const todo = state.entities[action.payload];
            todo.done = !todo.done;
        },
        DeleteTodo(state, action) {
            todosAdapter.removeOne(state, action.payload);
        },
        addTodos(state, action) {
            todosAdapter.addMany(state, action.payload);
        },
        updateTodoItem(state, action) {
            todosAdapter.updateOne(state, {
                id: action.payload.id,
                changes: action.payload,
            });
        }
    },
});

export const {AddTodo, ToggleToDo, DeleteTodo, addTodos, updateTodoItem} = todosSlice.actions;

export default todosSlice.reducer;

export const{selectIds: selectToDoIds, selectById: selectTodoIds} = todosAdapter.getSelectors(
    (state) => state.todoList
    );

export const {
    selectAll: selectTodos,
    selectById: selectTodoById,
} = todosAdapter.getSelectors((state) => state.todoList);

export const selectDoneList = createSelector([selectTodos], (todos) =>{
    return todos.filter((todo) => todo.done);
})