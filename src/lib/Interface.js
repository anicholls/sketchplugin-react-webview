import BrowserWindow from "sketch-module-web-view"
import { alertData } from "../commandReactExample"

const Interface = (context, options) => {
  const winOptions = {
    identifier: options.identifier,
    title: options.title,
    width: options.width,
    height: options.height,
    backgroundColor: "#f7f7f7",
    minimizable: false,
    maximizable: false,
    resizable: false,
    fullscreenable: false,
    show: false
  }
  let win = new BrowserWindow(winOptions)
  const contents = win.webContents

  win.once("ready-to-show", () => {
    win.show()
  })

  win.on("closed", () => {
    win = null
  })

  win.loadURL(require("../../resources/webview.html"))

  contents.executeJavaScript(`window.redirectTo="${options.redirectTo}";`)

  contents.on("close", () => win.close())

  contents.on("onReactCommand", data => alertData(context, data, win))
}

export default Interface
