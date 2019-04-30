import React from "react";
import Header from "./Header";
import { Switch, Route } from 'react-router-dom';
import Error404 from './Error404';
import Feed from "./Feed";

function App() {



  return (
    <div>
      <Header />
      <Switch>
        <Route path='/' component={Feed} />
        <Route component={Error404} />
      </Switch>
    </div>
  );
}

export default App;
