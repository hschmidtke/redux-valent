// src/js/actions/index.js

import { ADD_ARTICLE } from "../constants/action-types";

//payload is data for usage... can be everything
export const addArticle = article => ({ type: ADD_ARTICLE, payload: article });