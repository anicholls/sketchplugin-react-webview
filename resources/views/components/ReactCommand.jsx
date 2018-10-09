import React from "react"
import pluginCall from "sketch-module-web-view/client"

class ReactCommand extends React.Component {
  constructor() {
    super()

    this.onChange = this.onChange.bind(this)
    this.onClick = this.onClick.bind(this)
    this.state = {
      value: ""
    }
  }

  onChange(e) {
    this.setState({ value: e.target.value })
  }

  onClick() {
    pluginCall("onReactCommand", this.state.value)
  }

  render() {
    return (
      <div className="container command">
        <input onChange={this.onChange} placeholder="Enter some text" />
        <button onClick={this.onClick}>Submit</button>
      </div>
    )
  }
}

export default ReactCommand
