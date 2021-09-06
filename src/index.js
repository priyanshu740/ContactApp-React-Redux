import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { contactReducer } from "./redux/reducers/contactReducer";
import { composeWithDevTools } from "redux-devtools-extension";

  
  const store = createStore(contactReducer, composeWithDevTools());

ReactDOM.render(

  <Provider store={store} >
    <App />
  </Provider>,

  document.getElementById('root')
);
