import './App.css';
import ToDoList from './features/todos/components/ToDoList';
import {Route, Link, BrowserRouter, Switch, HashRouter} from "react-router-dom";
import NotFoundPage from './features/notfound/NotFoundPage';
import ToDoItem from './features/todos/components/TodoItem';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ul>
          <Link to="/">go to the todo list page</Link>
        </ul>
        <Switch>
          <Route exact path="/" component={ToDoList}></Route>
          <Route exact path="*" component={NotFoundPage}></Route>
        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;