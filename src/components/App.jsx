import React, { Component } from "react";
import Header from "./Header";
import { Switch, Route } from 'react-router-dom';
import Error404 from './Error404';
import Feed from "./Feed";
import NewPost from "./NewPost";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { masterPostlist: [] };
    this.handleAddingNewPostToList = this.handleAddingNewPostToList.bind(this);
  }

  handleAddingNewPostToList(newPost) {
    let list = masterPostlist.slice();
    list.push(newPost);
    this.setState({ masterPostlist: list });
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={Feed} />
          <Route path='/newpost' component={NewPost} />
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }
}

export default App;
