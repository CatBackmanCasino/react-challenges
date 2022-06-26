import React, { Component } from 'react'
import css from "./css/Content.module.css"
import { savedPosts } from "../posts.json"
import PostItem from './PostItem'
import Loader from './Loader'



export class Content extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoaded: false,
      posts: [],
    }
  }

  componentDidMount() {
    console.log("mounted")
    setTimeout(() => {
      this.setState({
        isLoaded: true,
        posts: savedPosts,
      })
    }, 1000)
  }

  handleChange = (e) => {
    const name = e.target.value.toLowerCase();
    const filteredPosts = savedPosts.filter((post) => {
      return post.name.toLowerCase().includes(name);
    })
    console.log(filteredPosts)
    this.setState({
      posts: filteredPosts
    })
  }
  render() {
    return (
      <div className={css.Content}>
        <div className={css.TitleBar}>
          <h1>My Photos</h1>
          <form>
            <label htmlFor="searchInput"></label>
            <input
              type="search"
              id="searchInput"
              name="searchInput"
              placeholder="By Author"
              onChange={(e) => this.handleChange(e)}
            />
            <h4>posts found {this.state.posts.length}</h4>
          </form>
        </div>

        <div className={css.SearchResults}>
          {
            this.state.isLoaded ?
              <PostItem savedPosts={this.state.posts} />
              :
              <Loader />
          }
        </div>
      </div>
    )
  }
}

export default Content