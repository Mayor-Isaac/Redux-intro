import { applyMiddleware, combineReducers, createStore } from "redux";
import { thunk } from "redux-thunk";
import { composeWithDevTools } from "redux-devtools/extension";

import { configureStore } from "@reduxjs/toolkit";

import accountReducer from "./Features/Accounts/accountSlice";
import customerReducer from "./Features/Customers/customerSlice";

const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});

// const store = createStore(rootReducer, applyMiddleware(thunk));
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
export default store;
