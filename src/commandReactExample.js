import Interface from "./lib/Interface"

export default function(context) {
  const options = {
    identifier: "sketch-react-plugin.ui",
    title: "React Command Example",
    redirectTo: "/react-command-example",
    width: 400,
    height: 118
  }

  Interface(context, options)
}

export function alertData(context, data, win) {
  const sketch = context.api()
  sketch.alert("Here's your data:", data.toString())
  win.close()
}
