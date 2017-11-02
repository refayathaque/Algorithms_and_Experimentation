import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import NotFound from "./containers/NotFound";
import Login from "./containers/Login";

export default () =>
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/login" exact component={Login} />
    { /* Finally, catch all unmatched routes. This needs to always be the last line in the <Route> block. You can think of it as the route that handles requests in case all the other routes before it have failed. */ }
    <Route component={NotFound} />
  </Switch>;
