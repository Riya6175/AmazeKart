import React from "react"
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom'
import './App.css';
import home from "./container/home/home"
import signin from "./container/signin/signin";
import signup from "./container/signup/signup";
import Footer from "./components/footer"


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