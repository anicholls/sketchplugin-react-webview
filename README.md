# Sketch Plugin React Webview Template

A template to build sketch components with React webviews.

## Setup

1. Install packages

```bash
yarn
```

2. Build

```bash
yarn build
```

3. Open Sketch

## CLI Commands

```bash
# build with hot reload
yarn start

# build for production
yarn build
```

## Creating Commands

### Basic command without webview

Use this to automatically run a command when you select it from the menu dropdown.

1. Update the "Example Command" in [manifest.json](src/manifest.json)
2. Update the example command file in [commandExample.js](src/commandExample.js).

### Command with webview

Use this to load a react web view to take user input, etc.

1. Update the "React Example Command" in [manifest.json](src/manifest.json)
2. Update the react example command file in [commandReactExample.js](src/commandReactExample.js). Add any functions that use the Sketch API that you want to call here
3. Add the functions you added in the step 2 file as event handlers in [Interface.js](src/lib/Interface.js)
4. Add a route for your command in [routes.jsx](resources/views/routes.jsx)
5. Add a component to be rendered for your webview in the components folder (i.e. [ReactCommand.jsx](resources/views/components/ReactCommand.jsx)
6. Call your command from step 2 in your React component using the event name you specified in step 3

## Debugging

To view the output of your `console.log`, you have a few different options:

- Open `Console.app` and look for the sketch logs
- Use Safari's web inspector to debug your plugin's javascript context
- Look at the `~/Library/Logs/com.bohemiancoding.sketch3/Plugin Output.log` file

Skpm provides a convenient way to do the latter:

```bash
skpm log
```

The `-f` option causes `skpm log` to not stop when the end of logs is reached, but rather to wait for additional data to be appended to the input
