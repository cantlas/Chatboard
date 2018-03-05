import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const chatboardList = {
  list: {
    listStyle: "none",
    fontFamily: "arial",
    margin: 0,
    padding: 0,
    width: "400px",
    overflow: "auto"
  },
  title: {
    float: "left",
    fontWeight: "bold",
    color: "#484848",
    cursor: "pointer"
  },
  user: {
    float: "right",
    color: "#646464",
    fontSize: "12px",
    paddingTop: "2px",
    textTransform: "uppercase"
  },
  listitem: {
    overflow: "auto",
    padding: "20px"
  }
};

const ChatboardListPage = props => {
  return (
    <ul style={chatboardList.list}>
      {props.posts.map(post => {
        const url = "/post/" + post.id;
        return (
          <li style={chatboardList.listitem} key={post.id}>
            <Link to={url}>
              <div style={chatboardList.title}>{post.title}</div>
              <div style={chatboardList.user}>{post.user}</div>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

const mapStateToProps = state => {
  console.log(state);
  return {
    posts: state.postReducer.posts
  };
};

export default connect(mapStateToProps)(ChatboardListPage);
