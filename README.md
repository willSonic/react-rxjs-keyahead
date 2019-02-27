
 Run `npm i` to install dependencies.

start the `webpack-dev-server` by running `npm run dev`.

## Commands

To lint your .js files, run `npm run lintjs`.

To prettify your .js files, run `npm run format`.

To lint your .scss files, run `npm run lintstyles`.

To run your tests, while inside the client's root directory, run `npm run test`. Testing will watch all your changes in the `.test.js` files as well as create a `coverage` folder. To view the current coverage report, navigate to `coverage/Icov-report/src` and open `index.html` in a browser. Please note that `*.test.js` files will be ignored by ESlint. To find out why, please see <a href="https://github.com/mattcarlotta/Webpack-React-Boilerplate/blob/master/src/setupTests.js">setupTest.js</a> for more information.

To build and bundle your client resources for staging, use `npm run staging` while inside the root directory (staging utilizes source maps for errors).

To build and bundle your client resources for production, use `npm run build` while inside the root directory (source maps will be excluded).

## Configuration

- `config/envs.js` webpack environment variables.
- `config/paths.js` webpack config folder paths.
- `config/rules.js` webpack rules functions.
- `config/webpack.common.js` common webpack config for both development and production environments.
- `config/webpack.dev.js` webpack config for development environment only.
- `config/webpack.prod.js` webpack config for production environment only.
- `webpack.config.js` main webpack config that merges common and an environment based config
- `src/setupTest.js` enzyme test setup for your React components.
- `.babelrc` babel config for react js files.
- `.browserslistrc` browsers list config.
- `.eslintignore` eslint config for ignoring scss files.
- `.eslintrc` eslint config for linting js files.
- `.prettierc` prettier config.
- `.stylelintrc.json` stylelint config for linting scss files.
