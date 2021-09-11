import {
  ARTICLE_CREATE_REQUEST,
  ARTICLE_CREATE_SUCCESS,
  ARTICLE_CREATE_FAIL,
  ARTICLE_CREATE_RESET,
  ARTICLE_UPDATE_REQUEST,
  ARTICLE_UPDATE_SUCCESS,
  ARTICLE_UPDATE_FAIL,
  ARTICLE_UPDATE_RESET,
} from "../constants/articleConstants";


export const articleCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case ARTICLE_CREATE_REQUEST:
      return { loading: true };

    case ARTICLE_CREATE_SUCCESS:
      return {
        loading: false,
        success: true,
        article: action.payload,
      };

    case ARTICLE_CREATE_FAIL:
      return { loading: false, error: action.payload };

    case ARTICLE_CREATE_RESET:
      return {};

    default:
      return state;
  }
};

export const articleUpdateReducer = (state = { article: {} }, action) => {
  switch (action.type) {
    case ARTICLE_UPDATE_REQUEST:
      return { loading: true };

    case ARTICLE_UPDATE_SUCCESS:
      return { loading: false, success: true, article: action.payload };

    case ARTICLE_UPDATE_FAIL:
      return { loading: false, error: action.payload };

    case ARTICLE_UPDATE_RESET:
      return { article: {} };

    default:
      return state;
  }
};