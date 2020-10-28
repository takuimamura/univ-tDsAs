import Vue from "vue";
import App from "./App.vue";
import router from "./router";

// Amplify
import Amplify from "aws-amplify";
import "@aws-amplify/ui-vue";
import awsconfig from "./aws-exports";

Amplify.configure(awsconfig);
// Vue.use(AmplifyPlugin, AmplifyModules);
// import Amplify, * as AmplifyModules from "aws-amplify";
// import { AmplifyPlugin } from "aws-amplify-vue";
// import awsconfig from "./aws-exports";

// Amplify.configure(awsconfig);
// Vue.use(AmplifyPlugin, AmplifyModules);

import Buefy from "buefy";
import "buefy/dist/buefy.css";

import { library } from "@fortawesome/fontawesome-svg-core";
// import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
// library.add(faCoffee);

Vue.component("font-awesome-icon", FontAwesomeIcon);
import vueAwesomeCountdown from "vue-awesome-countdown";
Vue.use(vueAwesomeCountdown, "vac"); // Component name, `countdown` and `vac` by default

import { fas } from "@fortawesome/free-solid-svg-icons";
library.add(fas);

Vue.use(Buefy, {
  defaultIconComponent: "font-awesome-icon",
  defaultIconPack: "fas",
});

// import "dayjs/locale/ja";
// import "dayjs/locale/en";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
// dayjs.locale("ja");
// dayjs.locale("en");
dayjs.extend(relativeTime);
Vue.prototype.$dayjs = dayjs;

//import { formatDate, description } from "./plugins/filters.js";
Vue.use(dayjs);
// Vue.use(dayjs, formatDate, description);

import * as localforage from "localforage";
const dbName = "TMU App Data Storage";
// localforage
//   .dropInstance({
//     name: dbName,
//   })
//   .then(function() {
//     console.warn("dropped");
//   });
const idbCl = localforage.createInstance({
  name: dbName,
  storeName: "classmems",
  version: 1,
});
const idbCi = localforage.createInstance({
  name: dbName,
  storeName: "classindex",
  version: 1,
});
const idbSq = localforage.createInstance({
  name: dbName,
  storeName: "sendqueue",
  version: 1,
});
const idbMn = localforage.createInstance({
  name: dbName,
  storeName: "manage",
  version: 1,
});
const idbSm = localforage.createInstance({
  name: dbName,
  storeName: "summary",
  version: 1,
});
const idbMi = localforage.createInstance({
  name: dbName,
  storeName: "miscs",
  version: 1,
});
Vue.prototype.idbCl = idbCl;
Vue.prototype.idbCi = idbCi;
Vue.prototype.idbSq = idbSq;
Vue.prototype.idbMn = idbMn;
Vue.prototype.idbSm = idbSm;
Vue.prototype.idbMi = idbMi;

//------------------------------------

Vue.config.productionTip = true;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");

//------------------------------------
