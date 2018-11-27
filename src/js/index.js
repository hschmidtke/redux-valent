// import store from "../js/store/index";
// import { addArticle } from "../js/actions/index";

// window.store = store;
// window.addArticle = addArticle;

import React, { Component } from 'react';
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "./store/index";
import App from "./components/App.js";

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("app")
);