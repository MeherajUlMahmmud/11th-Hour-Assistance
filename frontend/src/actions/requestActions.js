import axios from "axios";
import {
  REQUEST_CREATE_REQUEST,
  REQUEST_CREATE_SUCCESS,
  REQUEST_CREATE_FAIL,
  REQUEST_LIST_REQUEST,
  REQUEST_LIST_SUCCESS,
  REQUEST_LIST_FAIL,
  REQUEST_DETAILS_REQUEST,
  REQUEST_DETAILS_SUCCESS,
  REQUEST_DETAILS_FAIL,
  REQUEST_UPDATE_REQUEST,
  REQUEST_UPDATE_SUCCESS,
  REQUEST_UPDATE_FAIL,
  REQUEST_DELETE_REQUEST,
  REQUEST_DELETE_SUCCESS,
  REQUEST_DELETE_FAIL,
} from "../constants/requestConstants";

export const listRequests = () => async (dispatch) => {
  try {
    dispatch({ type: REQUEST_LIST_REQUEST });

    const { data } = await axios.get("/api/request/all-requests/");

    dispatch({
      type: REQUEST_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: REQUEST_LIST_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const createRequest =
  (
    patientName,
    gender,
    bloodGroup,
    location,
    isEmergency,
    neededWithin,
    phone,
    note
  ) =>
  async (dispatch, getState) => {
    try {
      dispatch({
        type: REQUEST_CREATE_REQUEST,
      });

      const {
        userLogin: { userInfo },
      } = getState();

      const config = {
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };

      const { data } = await axios.post(
        `/api/request/create-new-request/`,
        {
          patient_name: patientName,
          gender: gender,
          blood_group: bloodGroup,
          location: location,
          is_emergency: isEmergency,
          needed_within: neededWithin,
          phone: phone,
          note: note,
        },
        config
      );

      dispatch({
        type: REQUEST_CREATE_SUCCESS,
        payload: data,
      });

      dispatch({
        type: REQUEST_DETAILS_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: REQUEST_CREATE_FAIL,
        payload:
          error.response && error.response.data.detail
            ? error.response.data.detail
            : error.message,
      });
    }
  };

export const requestDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: REQUEST_DETAILS_REQUEST });

    const { data } = await axios.get(`/api/request/request/${id}/`);

    dispatch({
      type: REQUEST_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: REQUEST_DETAILS_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const updateRequest =
  (
    id,
    patientName,
    gender,
    bloodGroup,
    location,
    isEmergency,
    isActive,
    neededWithin,
    phone,
    note
  ) =>
  async (dispatch, getState) => {
    try {
      dispatch({
        type: REQUEST_UPDATE_REQUEST,
      });

      const {
        userLogin: { userInfo },
      } = getState();

      const config = {
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };

      const { data } = await axios.put(
        `/api/request/update-request/${id}/`,
        {
          patient_name: patientName,
          gender: gender,
          blood_group: bloodGroup,
          location: location,
          is_emergency: isEmergency,
          is_active: isActive,
          needed_within: neededWithin,
          phone: phone,
          note: note,
        },
        config
      );
      dispatch({
        type: REQUEST_UPDATE_SUCCESS,
        payload: data,
      });

      dispatch({
        type: REQUEST_DETAILS_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: REQUEST_UPDATE_FAIL,
        payload:
          error.response && error.response.data.detail
            ? error.response.data.detail
            : error.message,
      });
    }
  };

export const deleteRequest = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: REQUEST_DELETE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.delete(
      `/api/request/delete-request/${id}/`,
      config
    );

    dispatch({
      type: REQUEST_DELETE_SUCCESS,
    });
  } catch (error) {
    dispatch({
      type: REQUEST_DELETE_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};
