import { UPDATE_SELECTED_POST, ADD_COMMENT, EDIT_COMMENT } from "./types";

export const updateSelectedPost = id => {
  return {
    type: UPDATE_SELECTED_POST,
    id
  };
};

export const addComment = (id, comment) => {
  return {
    type: ADD_COMMENT,
    id,
    comment
  };
};

export const editComment = (id, comment) => {
  return {
    type: EDIT_COMMENT,
    id,
    comment
  };
};
