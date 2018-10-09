import React from "react"
import { Route, Switch } from "react-router-dom"
import ReactCommand from "./components/ReactCommand"

export default () => (
  <Switch>
    <Route exact path="/react-command-example" component={ReactCommand} />
  </Switch>
)
