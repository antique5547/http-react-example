import React, { Component } from "react";
import axios from "axios";

import "./FullPost.css";

class FullPost extends Component {
  state = {
    post: null
  };

  componentDidUpdate() {
    console.log("componentDidUpdate");
    if (this.props.id) {
      if (
        !this.state.post ||
        (this.state.post && this.state.post.id !== this.props.id)
      ) {
        axios
          .get("https://jsonplaceholder.typicode.com/posts/" + this.props.id)
          .then(response => {
            console.log(response);
            this.setState({ post: response.data });
          });
      }
    }
  }

  deletePostHandler = id => {
    axios
      .delete("https://jsonplaceholder.typicode.com/posts/" + id)
      .then(response => {
        console.log("deleted succesfull : ", response);
      });
  };

  render() {
    let post = <p style={{ textAlign: "center" }}>Please select a Post!</p>;
    if (this.props.id) {
      post = <p style={{ textAlign: "center" }}>Loading...!</p>;
    }
    if (this.state.post) {
      post = (
        <div className="FullPost">
          <h1>{this.state.post.title}</h1>
          <p>{this.state.post.body}</p>
          <div className="Edit">
            <button
              className="Delete"
              onClick={() => this.deletePostHandler(this.props.id)}
            >
              Delete
            </button>
          </div>
        </div>
      );
    }

    return post;
  }
}

export default FullPost;
