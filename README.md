# 🐛Debugeroo

A slight clone of deliveroo's website, built for the purpose of demonstrating VSCodes in-built debugging tools.

## Branch Guide
* `master` - Contains the working code for the project.
* `debug` - Contains the broken code for the project.

## Installation Guide

1. Clone this repository: `git clone https://github.com/samogorm/debugeroo.git`
2. In the terminal, navigate to the directory of your cloned repo.
3. Run `yarn install` to install project dependencies.
4. Checkout `master` or `debug` branch
5. Run `yarn start`
6. Open a browser and go to http://localhost:3000

## Debugger for Chrome Setup
1. Install the `Debugger for Chrome` extenstion.
2. Tweak the debug config file to your liking (I've added the basic debug config to this repo in `.vscode/launch.json`.)

For more info: https://code.visualstudio.com/blogs/2016/02/23/introducing-chrome-debugger-for-vs-code.

## Testing
lol what? Nope, no tests here.
