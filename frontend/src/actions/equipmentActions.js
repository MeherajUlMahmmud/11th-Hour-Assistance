import axios from "axios";
import {
  EQUIPMENT_REQUEST_CREATE_REQUEST,
  EQUIPMENT_REQUEST_CREATE_SUCCESS,
  EQUIPMENT_REQUEST_CREATE_FAIL,
  EQUIPMENT_REQUEST_LIST_REQUEST,
  EQUIPMENT_REQUEST_LIST_SUCCESS,
  EQUIPMENT_REQUEST_LIST_FAIL,
  EQUIPMENT_REQUEST_DETAILS_REQUEST,
  EQUIPMENT_REQUEST_DETAILS_SUCCESS,
  EQUIPMENT_REQUEST_DETAILS_FAIL,
  EQUIPMENT_REQUEST_UPDATE_REQUEST,
  EQUIPMENT_REQUEST_UPDATE_SUCCESS,
  EQUIPMENT_REQUEST_UPDATE_FAIL,
  EQUIPMENT_REQUEST_DELETE_REQUEST,
  EQUIPMENT_REQUEST_DELETE_SUCCESS,
  EQUIPMENT_REQUEST_DELETE_FAIL,
} from "../constants/equipmentConstants";

export const listEquipmentRequests = () => async (dispatch) => {
  try {
    dispatch({ type: EQUIPMENT_REQUEST_LIST_REQUEST });

    const { data } = await axios.get("/api/equipment/all-requests/");

    dispatch({
      type: EQUIPMENT_REQUEST_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: EQUIPMENT_REQUEST_LIST_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const createRequest =
  (
    title,
    description,
    is_emergency,
    location,
    neededWithin,
    phone,
    note
  ) =>
  async (dispatch, getState) => {
    try {
      dispatch({
        type: EQUIPMENT_REQUEST_CREATE_REQUEST,
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
        `/api/equipment/create-new-request/`,
        {
          title: title,
          description: description,
          is_emergency: is_emergency,
          location: location,
          needed_within: neededWithin,
          phone: phone,
          note: note,
        },
        config
      );

      dispatch({
        type: EQUIPMENT_REQUEST_CREATE_SUCCESS,
        payload: data,
      });

      dispatch({
        type: EQUIPMENT_REQUEST_DETAILS_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: EQUIPMENT_REQUEST_CREATE_FAIL,
        payload:
          error.response && error.response.data.detail
            ? error.response.data.detail
            : error.message,
      });
    }
  };

export const requestDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: EQUIPMENT_REQUEST_DETAILS_REQUEST });

    const { data } = await axios.get(`/api/equipment/request/${id}/`);

    dispatch({
      type: EQUIPMENT_REQUEST_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: EQUIPMENT_REQUEST_DETAILS_FAIL,
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
    title,
    description,
    isEmergency,
    location,
    neededWithin,
    phone,
    note
  ) =>
  async (dispatch, getState) => {
    try {
      dispatch({
        type: EQUIPMENT_REQUEST_UPDATE_REQUEST,
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
        `/api/equipment/edit-request/${id}/`,
        {
          title: title,
          description: description,
          is_emergency: isEmergency,
          location: location,
          needed_within: neededWithin,
          phone: phone,
          note: note,
        },
        config
      );
      dispatch({
        type: EQUIPMENT_REQUEST_UPDATE_SUCCESS,
        payload: data,
      });

      dispatch({
        type: EQUIPMENT_REQUEST_DETAILS_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: EQUIPMENT_REQUEST_UPDATE_FAIL,
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
      type: EQUIPMENT_REQUEST_DELETE_REQUEST,
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
      `/api/equipment/delete-request/${id}/`,
      config
    );

    dispatch({
      type: EQUIPMENT_REQUEST_DELETE_SUCCESS,
    });
  } catch (error) {
    dispatch({
      type: EQUIPMENT_REQUEST_DELETE_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};