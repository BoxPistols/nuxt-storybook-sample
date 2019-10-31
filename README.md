# nuxt-storybook-sample

> Nuxt.js project

## Build Setup

``` bash
yarn run
   - buid-storybook
      build-storybook -s public
   - build
      nuxt build
   - dev
      nuxt
   - generate
      nuxt generate
   - lint
      eslint --ext .js,.vue --ignore-path .gitignore .
   - precommit
      npm run lint
   - start
      nuxt start
   - storybook
      start-storybook -p 9001 -c .storybook
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
