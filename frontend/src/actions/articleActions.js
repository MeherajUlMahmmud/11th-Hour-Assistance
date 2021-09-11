import axios from "axios";
import {
  ARTICLE_CREATE_REQUEST,
  ARTICLE_CREATE_SUCCESS,
  ARTICLE_CREATE_FAIL,
} from "../constants/articleConstants";

export const createArticle = () => async (dispatch, getState) => {
    try {
      dispatch({
        type: ARTICLE_CREATE_REQUEST,
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
        `/api/articles/create-new-article/`,
        {},
        config
      );

      dispatch({
        type: ARTICLE_CREATE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ARTICLE_CREATE_FAIL,
        payload:
          error.response && error.response.data.detail
            ? error.response.data.detail
            : error.message,
      });
    }
  };
