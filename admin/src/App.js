import React from "react"
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom'
import './App.css';
import home from "./containers/home/home"
import signin from "./containers/signin/signin";
import signup from "./containers/signup/signup";


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={home} />
          <Route path="/signin" component={signin} />
          <Route path="/signup" component={signup} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
