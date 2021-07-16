import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Main from "./components/main";
import Testing from './components/testing';

function App() {
  
  return (
    <Router>
      <Switch>
        <Route path="/testing">
          <Testing />
        </Route>
        <Route path="/">
          <Main />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
