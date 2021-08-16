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
} from "./reducers/equipmentReducers";

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
