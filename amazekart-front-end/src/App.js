import HomePage from './containers/HomePage';
import './App.css';
import { AmazonContextProvider } from './Context/AmazonContext';

function App() {
  return (
    <AmazonContextProvider>   
    <div className="App">
      <HomePage/>
    </div>
    </AmazonContextProvider>
  );
}

export default App;
