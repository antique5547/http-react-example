import React, { Component } from "react";

import "./NewPost.css";
import Axios from "axios";

class NewPost extends Component {
  state = {
    title: "",
    content: "",
    author: "Max",
    postStatus: false
  };

  postDataHandler = () => {
    const post = {
      title: this.state.title,
      body: this.state.content,
      author: this.state.author
    };
    Axios.post("https://jsonplaceholder.typicode.com/posts", post).then(
      response => {
        if (response.status === 201) this.setState({ postStatus: true });
      }
    );
  };

  render() {
    let postStatus = null;
    if (this.state.postStatus) {
      postStatus = (
        <p style={{ textAlign: "center", color: "green" }}>
          Post Added Successfully
        </p>
      );
    }
    return (
      <div className="NewPost">
        {postStatus}
        <h1>Add a Post</h1>
        <label>Title</label>
        <input
          type="text"
          value={this.state.title}
          onChange={event => this.setState({ title: event.target.value })}
        />
        <label>Content</label>
        <textarea
          rows="4"
          value={this.state.content}
          onChange={event => this.setState({ content: event.target.value })}
        />
        <label>Author</label>
        <select
          value={this.state.author}
          onChange={event => this.setState({ author: event.target.value })}
        >
          <option value="Max">Max</option>
          <option value="Manu">Manu</option>
        </select>
        <button onClick={this.postDataHandler}>Add Post</button>
      </div>
    );
  }
}

export default NewPost;
