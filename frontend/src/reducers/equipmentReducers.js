import {
  EQUIPMENT_REQUEST_CREATE_REQUEST,
  EQUIPMENT_REQUEST_CREATE_SUCCESS,
  EQUIPMENT_REQUEST_CREATE_FAIL,
  EQUIPMENT_REQUEST_CREATE_RESET,
  EQUIPMENT_REQUEST_LIST_REQUEST,
  EQUIPMENT_REQUEST_LIST_SUCCESS,
  EQUIPMENT_REQUEST_LIST_FAIL,
  EQUIPMENT_REQUEST_DETAILS_REQUEST,
  EQUIPMENT_REQUEST_DETAILS_SUCCESS,
  EQUIPMENT_REQUEST_DETAILS_FAIL,
} from "../constants/equipmentConstants";

export const equipmentRequestListReducer = (
  state = { equipment_requests: [] },
  action
) => {
  switch (action.type) {
    case EQUIPMENT_REQUEST_LIST_REQUEST:
      return { loading: true, equipment_requests: [] };

    case EQUIPMENT_REQUEST_LIST_SUCCESS:
      return {
        loading: false,
        equipment_requests: action.payload,
      };

    case EQUIPMENT_REQUEST_LIST_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const equipmentRequestCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case EQUIPMENT_REQUEST_CREATE_REQUEST:
      return { loading: true };

    case EQUIPMENT_REQUEST_CREATE_SUCCESS:
      return {
        loading: false,
        success: true,
        equipment_request: action.payload,
      };

    case EQUIPMENT_REQUEST_CREATE_FAIL:
      return { loading: false, error: action.payload };

    case EQUIPMENT_REQUEST_CREATE_RESET:
      return {};

    default:
      return state;
  }
};
export const equipmentRequestDetailsReducer = (state = { request: {} }, action) => {
  switch (action.type) {
    case EQUIPMENT_REQUEST_DETAILS_REQUEST:
      return { loading: true, ...state };

    case EQUIPMENT_REQUEST_DETAILS_SUCCESS:
      return { loading: false, request: action.payload };

    case EQUIPMENT_REQUEST_DETAILS_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
