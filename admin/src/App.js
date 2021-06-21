import React ,{useEffect} from "react"
import {Route, Switch} from 'react-router-dom'
import './App.css';
import home from "./containers/home/home"
import signin from "./containers/signin/signin";
import signup from "./containers/signup/signup";
import PrivateRoute from "./components/HOC/PrivateRoute"
import {useDispatch , useSelector} from "react-redux"
import { isUserLoggedIn} from "./actions"
import Products from "./containers/products/products";
import Orders from "./containers/orders/orders";
import Sidebar from "./containers/home/sidebar";
import Category from "./containers/category/category";

function App() {

  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);

  useEffect(() => {
    if(!auth.authenticate){
      dispatch(isUserLoggedIn());
    }
    
}, [])

  return (
    <div className="App">
      
        <Switch>
          <PrivateRoute path="/" exact component={home} />
          <PrivateRoute path="/products"  component={Products} />
          <PrivateRoute path="/orders"  component={Orders} />
          <PrivateRoute path="/category"  component={Category} />
          <Route path="/signin" component={signin} />
          <Route path="/signup" component={signup} />
        </Switch>
    </div>
  );
}

export default App;
