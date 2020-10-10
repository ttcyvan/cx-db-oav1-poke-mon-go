import React from 'react';
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Layout from './container/layout';
import Detail from './container/detail';
function App() {
  return (
    <React-Fragment>
      <BrowserRouter>
      <Switch>
      <Route exact path='/' component={Layout}/>
      <Route exact path='/:name' component={Detail}/>
      </Switch>
      </BrowserRouter>
    </React-Fragment>
  );
}

export default App;
