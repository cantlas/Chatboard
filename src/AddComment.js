import React from "react";
import { addComment } from "./actions/";

import { connect } from "react-redux";

class AddComment extends React.Component {
  constructor() {
    super();
    this.state = {
      id: null,
      message: "",
      user: "Aja"
    };
    this.handleChange = this.handleChange.bind(this);
    this.postComment = this.postComment.bind(this);
  }
  handleChange(e) {
    console.log(e.target.value);
    this.setState(
      {
        id: null,
        message: e.target.value,
        user: "Aja"
      },
      () => console.log(this.state)
    );
  }
  postComment() {
    this.props.addComment(this.props.postid, this.state);
    this.props.toggleVisibility();
  }
  render() {
    return (
      <div>
        <input
          onChange={this.handleChange}
          placeholder="Write a comment"
          value={this.state.message}
        />
        <button onClick={this.postComment}>Post</button>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addComment: (id, comment) => {
      dispatch(addComment(id, comment));
    }
  };
};

export default connect(null, mapDispatchToProps)(AddComment);
