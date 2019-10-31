import { configure } from '@storybook/vue'

// stories/*.stories.jsを読み込む
// const req = require.context("../stories", true, /.stories\.js$/)
// const loadStories = req.keys().forEach(req)

function loadStories() {
  const req = require.context('../stories', true, /\.js$/);
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module)
