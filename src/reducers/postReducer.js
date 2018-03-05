import {
  UPDATE_SELECTED_POST,
  ADD_COMMENT,
  EDIT_COMMENT
} from "../actions/types";
import generateId from "../utils/generateId";

const posts = [
  {
    id: 1,
    title: "Venus",
    user: "Shangela",
    comments: [
      {
        id: generateId(),
        message: "This is shit.",
        user: "Aja"
      },
      {
        id: generateId(),
        message: "No way.",
        user: "Milk"
      }
    ]
  },
  {
    id: 2,
    title: "Mars",
    user: "Kennedy Davenport"
  }
];

const editComment = (id, comment, posts) => {
  const postIndex = posts.findIndex(post => post.id == id);
  const commentIndex = posts[postIndex].comments.findIndex(
    comm => comm.id == comment.id
  );
  let newPosts = Object.assign([], posts);
  newPosts[postIndex].comments[commentIndex] = comment;
  return newPosts;
};

const addComment = (id, comment, posts) => {
  comment = {
    ...comment,
    id: generateId()
  };
  console.log(comment);
  const index = posts.findIndex(post => post.id == id);
  const newPosts = Object.assign([], posts);
  newPosts[index].comments.unshift(comment);
  return newPosts;
};

export const postReducer = (
  state = { posts: posts, selectedPost: 1 },
  action
) => {
  switch (action.type) {
    case UPDATE_SELECTED_POST:
      return { ...state, selectedPost: action.id };
    case ADD_COMMENT:
      return {
        ...state,
        posts: addComment(action.id, action.comment, state.posts)
      };
    case EDIT_COMMENT:
      return {
        ...state,
        posts: editComment(action.id, action.comment, state.posts)
      };
    default:
      return state;
  }
};
