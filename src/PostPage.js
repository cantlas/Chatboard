import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import AddComment from "./AddComment";
import EditComment from "./EditComment";

class PostPage extends React.Component {
  constructor() {
    super();
    this.state = {
      replyIsVisible: false,
      editIsVisible: false,
      commentForEdit: null
    };
    this.toggleReplyVisibility = this.toggleReplyVisibility.bind(this);
    this.editPost = this.editPost.bind(this);
    this.deletePost = this.deletePost.bind(this);
  }
  toggleReplyVisibility() {
    if (this.state.editIsVisible && this.state.replyIsVisible == false) {
      this.setState({ replyIsVisible: true, editIsVisible: false });
    } else {
      this.setState({
        replyIsVisible: !this.state.replyIsVisible
      });
    }
  }
  editPost(comment) {
    console.log(comment);
    if (this.state.replyIsVisible) {
      this.setState({
        replyIsVisible: false,
        editIsVisible: true
      });
    } else if (this.state.editIsVisible) {
      this.setState({
        editIsVisible: false
      });
    } else {
      this.setState({
        commentForEdit: Object.assign({}, comment),
        editIsVisible: true
      });
    }
  }
  deletePost() {
    console.log("deleting");
  }
  render() {
    const post = getPost(this.props.posts, this.props.match.params.id);
    return (
      <div>
        {post.map(post => {
          return (
            <div key={post.id}>
              {post.title} - {post.user}
              <br />
              {post.comments.map(comment => (
                <div>
                  {comment.message} - {comment.user}
                  <button onClick={() => this.editPost(comment)}>Edit</button>
                  <button onClick={this.deletePost}>Delete</button>
                </div>
              ))}
              <Link to="/">
                <button>Back</button>
              </Link>
              <button onClick={this.toggleReplyVisibility}>Comment</button>
              {this.state.replyIsVisible && (
                <AddComment
                  postid={post.id}
                  toggleVisibility={this.toggleReplyVisibility}
                />
              )}
              {this.state.editIsVisible && (
                <EditComment
                  postid={post.id}
                  comment={this.state.commentForEdit}
                />
              )}
            </div>
          );
        })}
      </div>
    );
  }
}

const getPost = (posts, id) => {
  console.log("Here is state:");
  console.log(posts);
  return posts.filter(post => post.id == id);
};

const mapStateToProps = state => {
  return {
    posts: state.postReducer.posts
  };
};

export default connect(mapStateToProps)(PostPage);
