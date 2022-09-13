import React from "react";
import "./App.css";
import { BrowserRouter , Route, Routes } from "react-router-dom";
import Home from "./Home";
import Header from "./Header";
import Login from "./Login";
import {auth} from "./firebase"
import  { useState, useEffect } from 'react';
import {useStateValue} from "./StateProvider"
import Checkout from "./Checkout";
import Payment from "./Payment";
import Orders from "./Orders";



function App() {
  const[{},dispatch] = useStateValue();
  useEffect(() => {
    // will only run once when the app component loads...
  
    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);
  
      if (authUser) {
        // the user just logged in / the user was logged in
  
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
return (
  <div className="app">
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element= {<Header/>} />
      </Routes>
      <Routes>
        <Route path="/" element= {<Home />} />
      </Routes>
      <Routes>
        <Route path="/login" element = {<Login />}/>
      </Routes>
      <Routes>
        <Route path="/checkout" element = {<Checkout/>}/>
      </Routes>
      <Routes>
        <Route path="/payment" element = {<Payment/>}/>
      </Routes>
      <Routes>
        <Route path="/orders" element = {<Orders/>}/>
      </Routes>
    </BrowserRouter>

  </div>
);
}
export default App;


