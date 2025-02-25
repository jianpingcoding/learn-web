# web technology

## [Babel](https://babeljs.io)

### Install Babel

- Install Babel as Dev Dependency: `npm install --save-dev @babel/core @babel/cli`
- Install env preset: `npm install --save-dev @babel/preset-env`
- Install polyfill:
  `npm i --save core-js regenerator-runtime`
  `npm i --save-dev @babel/plugin-proposal-class-properties`
  `'@babel/preset-env', { useBuiltIns: 'usage', corejs: { version: '3.0.0', proposals: true},`
  `import "core-js/stable"; import "regenerator-runtime/runtime";`
  @babel/polyfill package doesn't make it possible to provide a smooth migration path from core-js@2 to core-js@3: for this reason, it was decided to deprecate @babel/polyfill in favor of separate inclusion of required parts of core-js and regenerator-runtime.
- Install node with ES6 : `npm install --save-dev @babel/node @babel/register @babel/preset-env nodemon`

### Babel configuration

- Create a config file: `babel.config.js` or `babel.config.json` or `.babelrc.json`
- Create a npm build command: `babel js/src -o dist/compiled.js`

### Babel Usage

- Compile Files: `npx babel script.js --watch --out-file script-compiled.js --source-maps`
- Compile Directories: `npx babel src --out-dir lib --ignore "src/**/*.spec.js","src/**/*.test.js"`
- Copy files that will not be compiled or ignore: `npx babel src --out-dir lib --copy-files` or `--no-copy-ignored`
- Piping Files: `npx babel --out-file script-compiled.js < script.js`
- Using Plugins: `npx babel script.js --out-file script-compiled.js --plugins=@babel/proposal-class-properties,@babel/transform-modules-amd`
- Using Presets: `npx babel script.js --out-file script-compiled.js --presets=@babel/preset-env,@babel/flow`
- Ignoring .babelrc.json: `npx babel --no-babelrc script.js --out-file script-compiled.js --presets=es2015,react`
- Custom config path: `npx babel --config-file /path/to/my/babel.config.json --out-dir dist ./src`

## Main library

### React

- Install React: `npm install --save react react-dom`
- Install ESlint & babel `npm install --save-dev @babel/preset-react eslint-plugin-react`
- Add @babel/preset-react in babel.config.js
- Add jsx and react plugin in .eslintrc.yml
- Run the command: `parcel react/src/index.html`

### Vue

- Install Vue: `npm install --save vue`
- Add plugin:vue/essential extend and vue plugin in .eslintrc.yml
- Run the command: `parcel vue/src/index.html`

## Build systems

### ESLint & Prettier

- Install Prettier: `yarn add prettier --dev --exact`
- Install Eslint: `npm install --save-dev eslint eslint-config-prettier eslint-plugin-prettier`
- Run prettier when committing files: `yarn add pretty-quick husky --dev`

### [Webpack](https://webpack.js.org/)

- Install webpack: `npm install --save-dev webpack webpack-cli`
- Create webpack.config.js in the root.
- Add Babel: `npm install --save-dev babel-loader`
- Add Sass styling: `npm install --save-dev css-loader style-loader sass-loader node-sass`
- Add Image (SVG, PNG): `npm install --save-dev file-loader url-loader`
- Add Utilities moment, lodash : `npm install moment lodash lodash-webpack-plugin`.
- Add moment to plugins in webpack.config.js: `new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /en/)`

### [Parcel](https://parceljs.org)

- Install Parcel: `npm install --save-dev parcel-bundler`
- Add Build command: `parcel html/src/index.html`

## Test Framework

### [Mocha](https://mochajs.org/)

- Install Mock : `npm install --save-dev mocha`
- Support ES6: `npm install --save-dev @babel/register` and install env preset & polyfill.
- Usage: `mocha --require @babel/register js/test/mocha/**`

### [Chai](https://www.chaijs.com/)

- Install Chai: `npm install chai`
- Usage: `import { expect } from "chai";`

### [Jest](https://jestjs.io/)

- Install jest : `npm install --save-dev jest`
- Using Babel: `npm install --save-dev babel-jest @babel/core @babel/preset-env`

## [ESLint](https://eslint.org)

- Install: npm install eslint --save-dev
- Setup config: npx eslint --init
- npx eslint yourfile.js

# Related Website

[JavaScript Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference)
[Code Burst](https://codeburst.io)

[Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript)
[Standard](https://github.com/standard/standard)
[Google](https://github.com/google/eslint-config-google)

[Prettier](https://prettier.io/)

[AMP](https://amp.dev)
[Create App](https://createapp.dev)

[Egg Head](https://egghead.io)
[Free Code Camp](https://guide.freecodecamp.org)
[Geeks for Geeks](https://www.geeksforgeeks.org)
