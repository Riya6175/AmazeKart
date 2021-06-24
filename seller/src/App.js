import React,{useEffect} from "react"
import {Route, Switch} from 'react-router-dom'
import './App.css';
import home from "./container/home/home"
import signin from "./container/signin/signin";
import signup from "./container/signup/signup";
import PrivateRoute from "./components/HOC/PrivateRoute"
import {useDispatch , useSelector} from "react-redux"
import { isUserLoggedIn} from "./actions"
import Footer from "./components/footer"
import landing from "./components/landing";
import Products from "./container/product/product";
import Category from "./container/category/category";



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
          <PrivateRoute path="/seller" exact component={home} />
          <PrivateRoute path="/products"  component={Products} />
          <PrivateRoute path="/category"  component={Category} />
          <Route path='/' exact component={landing}/>
          <Route path="/signin" component={signin} />
          <Route path="/signup" component={signup} />
        </Switch>
    </div>
  );
}

export default App;