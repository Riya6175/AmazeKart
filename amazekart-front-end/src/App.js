import HomePage from './containers/HomePage';
import './App.css';
import { AmazonContextProvider } from './Context/AmazonContext';
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom'
import ProductListPage from './containers/ProductListPage';
import Signin from './components/signin/signin';
import SignUp from './components/signup/signup';

function App() {
  return (
    <AmazonContextProvider>   
    <div className="App">
      
      <Router>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/:slug" exact component={ProductListPage} />
          
        </Switch>
        
      </Router>
    </div>
    <Router>
    <Route path="/signin" component={Signin} />
    <Route path="/signup" component={SignUp} />
    </Router>
    
    </AmazonContextProvider>
  );
}

export default App;
