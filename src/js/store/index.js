// src/js/store/index.js

import { createStore } from "redux";
import rootReducer from "../reducers/index";
import { addArticle } from "../actions/index";

const store = createStore(rootReducer);

console.log(store.getState());

store.subscribe(() => console.log('Look ma, Redux!!'))

store.dispatch(addArticle({ name: 'React Redux Tutorial for Beginners', id: 1 }))

export default store;