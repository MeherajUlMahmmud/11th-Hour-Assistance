import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  requestCreateReducer,
  requestDetailsReducer,
  requestDeleteReducer,
  requestUpdateReducer,
  requestListReducer,
} from "./reducers/requestReducers";
import {
  equipmentRequestCreateReducer,
  equipmentRequestDetailsReducer,
  equipmentRequestListReducer,
  equipmentRequestUpdateReducer,
  equipmentRequestDeleteReducer,
} from "./reducers/equipmentReducers";
import {
  articleCreateReducer,
  articleListReducer,
  articleDetailsReducer,
  articleDeleteReducer,
  articleUpdateReducer,
} from "./reducers/articleReducers";

import {userDetailsReducer} from "./reducers/userReducers";

import { userLoginReducer, userRegisterReducer } from "./reducers/userReducers";

const reducer = combineReducers({
  requestCreate: requestCreateReducer,
  requestList: requestListReducer,
  requestDetails: requestDetailsReducer,
  requestUpdate: requestUpdateReducer,
  requestDelete: requestDeleteReducer,

  equipmentRequestCreate: equipmentRequestCreateReducer,
  equipmentRequestList: equipmentRequestListReducer,
  equipmentRequestDetails: equipmentRequestDetailsReducer,
  equipmentRequestUpdate: equipmentRequestUpdateReducer,
  equipmentRequestDelete: equipmentRequestDeleteReducer,

  articleCreate: articleCreateReducer,
  articleList: articleListReducer,
  articleDetails: articleDetailsReducer,
  articleDelete: articleDeleteReducer,
  articleUpdate: articleUpdateReducer,

  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer,
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
