// import "./App.scss";

import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";

import Header from "./Header";
import React from "react";
import MicroFrontend from "./Microfrontend";
import Home from "./Home";

const {
  REACT_APP_CHILD1_HOST: child1Host,
  REACT_APP_CHILD2_HOST: child2Host,
} = process.env;

const Child1 = ({ history }) => <MicroFrontend history={history} host={child1Host} name='Child1' />;
const Child2 = ({ history }) => (
  <MicroFrontend history={history} host={child2Host} name='Child2' />
);

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/child1' component={Child1} />
        <Route exact path='/child2' component={Child2} />
        <Redirect to='/' />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
