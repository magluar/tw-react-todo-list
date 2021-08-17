import './App.css';
import TodoItem from './features/todos/components/TodoItem';
import TodoGroup from './features/todos/components/TodoGroup';
import ToDoList from './features/todos/components/ToDoList';


function App() {
  return (
    <div className="App">
      <ToDoList/>
    </div>
  );
}

export default App;