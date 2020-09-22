import Vue from "vue";
import App from "./App.vue";
import router from "./router";

// Amplify
// import Amplify, * as AmplifyModules from "aws-amplify";
import { AmplifyPlugin } from "aws-amplify-vue";
import awsconfig from "./aws-exports";

import Amplify, { DataStore, Predicates, Hub, Auth } from "aws-amplify";
// import awsconfig from "../aws-exports";
// Amplify.configure(awsconfig);

Amplify.configure(awsconfig);
Vue.use(AmplifyPlugin, AmplifyModules);

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

//------------------------------------

Vue.config.productionTip = true;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");

//------------------------------------
