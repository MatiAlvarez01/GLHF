import './App.css';
import "./Fonts.css";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Home from './components/home/home';
import Land from './components/summoner/land';
import LandGame from './components/summoner/landGame';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/summoner/:summonerNameParam">
          <Land />
        </Route>
        <Route exact path="/match/:matchIdParam">
          <LandGame />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
