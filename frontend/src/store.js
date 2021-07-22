import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { requestListReducer } from "./reducers/requestReducers";

import { userLoginReducer, userRegisterReducer } from "./reducers/userReducers";

const reducer = combineReducers({
  requestList: requestListReducer,

  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
});

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const profileInfoFromStorage = localStorage.getItem("profileInfo")
  ? JSON.parse(localStorage.getItem("profileInfo"))
  : null;

const initialState = {
  userLogin: {
    userInfo: userInfoFromStorage,
    profileInfo: profileInfoFromStorage,
  },
};
const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;