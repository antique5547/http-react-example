import React, { Component } from "react";
import axios from "axios";

import Post from "../../components/Post/Post";
import FullPost from "../../components/FullPost/FullPost";
import NewPost from "../../components/NewPost/NewPost";
import "./Blog.css";

class Blog extends Component {
  state = {
    posts: [],
    selectedPostId: null,
    error: false
  };

  selectedPostHandler = id => {
    this.setState({ selectedPostId: id });
    console.log(this.state.selectedPostId);
  };

  componentDidMount() {
    axios
      .get("/posts")
      .then(response => {
        const posts = response.data.slice(0, 4);
        const updatePosts = posts.map(post => {
          return {
            ...post,
            author: "Atique"
          };
        });
        this.setState({ posts: updatePosts });
      })
      .catch(error => {
        console.log(error);
        this.setState({ error: true });
      });
  }

  render() {
    let postHeader = (
      <p style={{ textAlign: "center", color: "red" }}>
        Something went wrong!!!
      </p>
    );
    if (!this.state.error) {
      postHeader = this.state.posts.map(post => {
        return (
          <Post
            key={post.id}
            title={post.title}
            author={post.author}
            clicked={() => this.selectedPostHandler(post.id)}
          />
        );
      });
    }
    return (
      <div>
        <section className="Posts">{postHeader}</section>
        <section>
          <FullPost id={this.state.selectedPostId} />
        </section>
        <section>
          <NewPost />
        </section>
      </div>
    );
  }
}

export default Blog;
