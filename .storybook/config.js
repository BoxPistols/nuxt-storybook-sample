import { configure } from '@storybook/vue'

// Bad! has Error
// const req = require.context("../stories", true, /.stories\.js$/)
// const loadStories = req.keys().forEach(req)

function loadStories() {
  const req = require.context('../stories', true, /\.js$/);
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module)
