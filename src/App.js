import './App.css';
import ToDoList from './features/todos/components/ToDoList';
import {Route, Link, BrowserRouter, Switch} from "react-router-dom";
import NotFoundPage from './features/notfound/NotFoundPage';
import DoneList from './features/todos/components/DoneList';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ul>
          <Link to="/">go to the todo list page</Link>
          <br></br>
          <Link to="/done">go to done page</Link>
        </ul>
        <Switch>
          <Route exact path="/" component={ToDoList}></Route>
          <Route exact path="/done" component={DoneList}></Route>
          <Route exact path="*" component={NotFoundPage}></Route>
        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;