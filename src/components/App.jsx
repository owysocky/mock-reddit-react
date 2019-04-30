import React, { Component } from "react";
import Header from "./Header";
import { Switch, Route } from 'react-router-dom';
import Error404 from './Error404';
import Feed from "./Feed";
import NewPost from "./NewPost";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      masterPostList: []
    };
    this.handleAddingNewPostToList = this.handleAddingNewPostToList.bind(this);
    this.handleAddNewLike = this.handleAddNewLike.bind(this);
    this.handleAddNewDislike = this.handleAddNewDislike.bind(this);
    this.sortByLikes = this.sortByLikes.bind(this);
    this.setColor = this.setColor.bind(this);
  }

  handleAddingNewPostToList(newPost) {
    var list = this.state.masterPostList.slice();
    list.push(newPost);
    this.setState({ masterPostList: list });
  }

  findIndex(id) {
    for (var i = 0; i < this.state.masterPostList.length; i++) {
      if (id == this.state.masterPostList[i].id) {
        return i;
      }
    }
  }

  handleAddNewLike(id) {
    let newPostList = this.state.masterPostList.slice();
    newPostList[this.findIndex(id)].likes++;
    this.setState({ masterPostList: newPostList });
    this.sortByLikes();
    this.setColor();
  }

  handleAddNewDislike(id) {
    let newPostList = this.state.masterPostList.slice();
    newPostList[this.findIndex(id)].likes--;
    this.setState({ masterPostList: newPostList });
    this.sortByLikes();
    this.setColor();
  }


  sortByLikes() {
    let newPostList = this.state.masterPostList.slice();
    for (let i = 0; i < newPostList.length; i++) {
      for (let j = 0; j < newPostList.length - 1; j++) {
        if (newPostList[j].likes < newPostList[j + 1].likes) {
          let temp = newPostList[j];
          newPostList[j] = newPostList[j + 1];
          newPostList[j + 1] = temp;
        }
      }
    }

    this.setState({ masterPostList: newPostList });
  }

  setColor() {
    let newPostList = this.state.masterPostList.slice();
    for (let i = 0; i < newPostList.length; i++) {
      if (newPostList[i].likes > 0) {
        return "green";
      } else {
        return "red";
      }
    }
    this.setState({ masterPostList: newPostList });
  }

  render() {

    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' render={() => <Feed onSetColor={this.setColor} onClickDislike={this.handleAddNewDislike} onClickLike={this.handleAddNewLike} postList={this.state.masterPostList} />} />
          <Route path='/newpost' render={() => <NewPost onNewPostCreation={this.handleAddingNewPostToList} />} />
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }
}

export default App;


