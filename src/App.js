import logo from './logo.svg';
import './App.css';
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Home from './view/Home';
import Navbar from './components/Navbar';
import injectContext from './store/appContext';


function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route render={() => <h1>Not Found</h1>}></Route>
        </Switch>

      </div>
    </Router>
  );
}

export default injectContext(App);

