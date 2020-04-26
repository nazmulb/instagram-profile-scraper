import Vue from "vue";
import upperFirst from "lodash/upperFirst";
import camelCase from "lodash/camelCase";
import App from "./App.vue";
import router from "./router";
import store from "./store/store";

import "./assets/styles/index.scss";

Vue.config.productionTip = false;

// Add all reusable base components
const requireComponent = require.context(
  "./components/ui",
  false,
  /[A-Z]\w+\.(vue|js)$/
);

requireComponent.keys().forEach(fileName => {
  const componentConfig = requireComponent(fileName);

  const componentName = upperFirst(
    camelCase(fileName.replace(/^\.\/(.*)\.\w+$/, "$1"))
  );

  Vue.component(componentName, componentConfig.default || componentConfig);
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
