import React,{ useEffect } from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import {BrowserRouter as Router, Switch, Route } from "react-router-dom"; 
import Checkout from './Checkout';
import Login from './Login';
import {auth} from './firebase';
import { useStateValue } from './StateProvider';

function App() {
  const [{}, dispatch] =useStateValue();

  useEffect(() => {
    //will run only once when the app component loads
    auth.onAuthStateChanged(authUser => {
      console.log("the auth user >>> ",authUser);
      if(authUser){
        //the user just logged in / the user was logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      }
      else {
        //the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])

  return (
    //BEM naming convention for styling
    <Router>
    <div className="app">
      {/* Header Component */}
        <Switch>
        <Route path="/login"> 
          <Login />
          </Route>
          <Route path="/checkout"> 
            <Header />
            <Checkout />
          </Route>
          <Route path="/">
            <Header />
            {/* Home Component*/}<Home />
          </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;