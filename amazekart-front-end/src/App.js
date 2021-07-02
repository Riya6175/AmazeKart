import HomePage from './containers/HomePage';
import './App.css';
import { AmazonContextProvider } from './Context/AmazonContext';
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom'
import ProductListPage from './containers/ProductListPage';

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
    </AmazonContextProvider>
  );
}

export default App;
