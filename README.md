# nuxt-storybook-sample

> Nuxt.js project

## Build Setup

``` bash
# install dependencies
$ npm install # Or yarn install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, checkout the [Nuxt.js docs](https://github.com/nuxt/nuxt.js).



---

# Document

`config.js`

```js
import { configure } from '@storybook/vue'

// Bad! has Error ↓
// const req = require.context("../stories", true, /.stories\.js$/)
// const loadStories = req.keys().forEach(req)

// OK!
function loadStories() {
  const req = require.context('../stories', true, /\.js$/);
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module)
```
