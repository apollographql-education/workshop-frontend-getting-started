# Getting started with GraphQL and Apollo: Frontend

Welcome to the companion starter code repo of the Summit 2022 Workshop "Getting started with GraphQL and Apollo: Frontend"!

You can [preview the completed demo app here](https://workshop-catstronauts.netlify.app/).

## Codebase structure

The workshop will walk you step by step on how to build the client app for Catstronauts. This codebase is the starting point of your journey!

There are 2 main folders:

- `client`: The starting point of our React application.
- `final`: The final form of our React application, after going through the workshop.

## Pre-requisites

- [Node v16 installed](https://nodejs.org/en/). See note below if using v17+.
- [VS Code](https://code.visualstudio.com/), or any other code editor.

### Installing and starting the app

To get started, open up a terminal window.

1. Navigate to the `client` folder.
1. Run `npm install`.
1. Run `npm start`.

This will start the React application on `localhost:3000` in the browser. You should see the Catstronauts layout (header and footer), with empty space in the middle.

In the workshop, we'll walk you through how to display data from our GraphQL API.

#### If using Node v17+

We highly recommend using node v16 for this workshop. If you choose to use v17+, you will need to add the `--openssl-legacy-provider` flag for the `start` script in the `package.json` file.

```json
"start": "react-scripts --openssl-legacy-provider start",
```

Then, run `npm start` to start the React app.
