# React Demo Using Rush

A simple mono-repo demonstrating how to use Rush to manage a Typescript/React/Webpack project.

## Summary of Packages

| Directory          | Description                                      |
| ------------------ | ------------------------------------------------ |
| `./app-component/` | The whole app contained in a React element.      |
| `./app-main/`      | Builds the whole app ready for use in a website. |

## Devlopment

To get started, install [Rush](https://rushjs.io/) and
[PNPM](https://pnpm.js.org/) by running `npm i -g @microsoft/rush pnpm`. Then
run `rush install` to install all the dependencies and run `rush build` to
build all the projects.

For real time development, go to `app-main` and run `rushx start` to run
in a local project. Then go to the `app-component` directory and run
`rushx watch` to watch for changes in this project. These changes will
then be picked up in `app-main`.
