# App Main

Bundles the app for the web and for local development.

## Commands

| Command | Description                                                                  |
| ------- | ---------------------------------------------------------------------------- |
| `build` | Builds the bundle for use in production.                                     |
| `start` | Creates a simple website that will update when changes to the code are made. |

## Environment

You can set the following commands to control the build.

| Variable   | Description                                                        |
| ---------- | ------------------------------------------------------------------ |
| `NODE_ENV` | Set to `production` to generate an optimized build.                |
| `HTTPS`    | Set to `true` to run an HTTPS web server when running `rushx start`. |
