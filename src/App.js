
import './App.css';
import './components/Login';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import SignIn from './components/Login';
import SignUp from './components/Register';

// function App() {
//   return (
//    <div>
//      <SignUp/>
//    </div>
//   );
// }
export default function BasicExample() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <SignIn />
          </Route>
          <Route exact path="/login">
            <SignIn />
          </Route>
          <Route path="/register">
            <SignUp />
          </Route>
          {/* <Route path="/dashboard">
            <Dashboard />
          </Route> */}
        </Switch>
      </div>
    </Router>
  );
}

// export default BasicExample;
