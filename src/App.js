import './App.css';
import ToDoList from './features/todos/components/ToDoList';
import {Route, Link, BrowserRouter, Switch} from "react-router-dom";
import NotFoundPage from './features/notfound/NotFoundPage';
import DoneList from './features/todos/components/DoneList';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
            <Link to="/" className="nav-link text-muted" href="#">Todo-List</Link>
        </li>
        <li className="nav-item">
            <Link to="/done" className="nav-link text-muted" href="#">Done-List</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
        {/* <ul>
          <li>
          </li>
          <li>
          </li>
        </ul> */}
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