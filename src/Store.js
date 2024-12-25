import { combineReducers, createStore } from "redux";
// import accountReducer from "./Features/Accounts/accountSlice";
import accountReducer from "./Features/Accounts/accountSlice";
import customerReducer from "./Features/Customers/customerSlice";

const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});

const store = createStore(rootReducer);
export default store;
