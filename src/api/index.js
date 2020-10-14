let api = {};
const context = require.context("./models", true, /\.js$/);
context.keys().forEach((e) => {
  api = { ...api, ...context(e).default };
});
const install = (Vue, vm) => {
  Vue.prototype.$api = api;
};
export default {
  install,
};
