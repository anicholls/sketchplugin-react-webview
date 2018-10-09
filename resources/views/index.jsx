import React from "react"
import ReactDOM from "react-dom"
import { HashRouter } from "react-router-dom"
import pluginCall from "sketch-module-web-view/client"
import Routes from "./routes"

if (window.data === undefined) {
  pluginCall("getData")
}

if (process.env.NODE_ENV === "production") {
  document.addEventListener("contextmenu", e => e.preventDefault())
}

let App

if (window.redirectTo !== undefined) {
  window.location.hash = window.redirectTo
  App = () => (
    <div>
      <Routes />
    </div>
  )
} else {
  App = () => <Routes />
}

ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.getElementById("root")
)
