import logo from './logo.svg';
import './App.css';
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Home from './view/Home';
import Navbar from './components/Navbar';
import injectContext from './store/appContext';
import PlanetsInfo from './view/PlanetsInfo';
import Peoplesinfo from './view/PeoplesInfo';
import Planetsinfo from './view/PlanetsInfo';


function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/Planetsinfo/:id" component={Planetsinfo}>
            <PlanetsInfo />
          </Route>
          <Route exact path="/Peopleinfo/:id" component={Peoplesinfo}>
            <Peoplesinfo />
          </Route>
          
          <Route render={() => <h1>Not Found</h1>}></Route>
        </Switch>

      </div>
    </Router>
  );
}

export default injectContext(App);

/* 

          <Route exact path="/">
            <Planetsinfo />
          </Route>


          <Route exact path="/">
            <Peopleinfo />
          </Route>


          <Route exact path="/">
            <Vehiclesinfo />
          </Route>
*/