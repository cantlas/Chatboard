import React from "react";
import { editComment } from "./actions/";

import { connect } from "react-redux";

class EditComment extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.comment;
    console.log("constructing");
    this.handleChange = this.handleChange.bind(this);
    this.updateComment = this.updateComment.bind(this);
  }
  componentWillReceiveProps(props) {
    console.log("receiving props");
    this.setState(props.comment);
  }
  handleChange(e) {
    console.log(e.target.value);
    this.setState(
      {
        message: e.target.value,
        user: ""
      },
      () => console.log(this.state)
    );
  }
  updateComment() {
    this.props.editComment(this.props.postid, this.state);
  }
  render() {
    return (
      <div>
        <input
          onChange={this.handleChange}
          placeholder="Write a comment"
          value={this.state.message}
        />
        <button onClick={this.updateComment}>Post</button>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    editComment: (id, comment) => {
      dispatch(editComment(id, comment));
    }
  };
};

export default connect(null, mapDispatchToProps)(EditComment);
