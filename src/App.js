import React from "react";
import { Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { BrowserRouter as Router } from "react-router-dom";

import AddPost from "./components/AddContact";
import EditContact from "./components/EditContact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import "./styles.css";

const App = () => {
  return (
    <div className="App">
      <Router>
        <ToastContainer />
        <Navbar />
          <Route exact path="/" >
            <Home />
          </Route>
          <Route exact path="/add" >
            <AddPost />
          </Route>
          <Route exact path="/edit/:id" >
            <EditContact />
          </Route>
      </Router>
    </div>
  );
};
export default App;
