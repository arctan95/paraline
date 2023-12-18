# Contributing to Paraline

We want to make contributing to this project as easy and transparent as
possible.

## Pull Requests

We actively welcome your pull requests.

1. Fork the repo and create your branch from `main`.
2. If you've added code that should be tested, add tests.
3. Make sure your code lints.

## Issues

We use GitHub issues to track public bugs. Please ensure your description is
clear and has sufficient instructions to be able to reproduce the issue.

## Coding Style

Paraline uses `eslint` and `prettier` to lint and format code.

You can format and lint manually by running:

```
$ npm run lint
$ npm run format
```

There are also VSCode extensions that can run those linters / formatters for you. Prettier has a [VSCode Plugin](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode), which allows you to format on save.

If you don't want to format on save, and want to format a single file, you can use `Ctrl+Shift+P` in VS Code (`Cmd+Shift+P` on macs) to bring up the command palette, then type `Format Document` to format the currently active file. Note that you should have the Prettier VS code plugin installed to make sure it formats according to the project's guidelines.

## License

By contributing to Paraline, you agree that your contributions will be licensed
under the LICENSE file in the root directory of this source tree.
