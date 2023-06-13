import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faHeart,
  faMagnifyingGlass,
  faTrash,
  faPenToSquare,
} from "@fortawesome/free-solid-svg-icons";

import "./assets/main.css";

library.add(faHeart, faMagnifyingGlass, faTrash, faPenToSquare);

const app = createApp(App);

app.use(router);
app.use(createPinia());

app.component("font-awesome-icon", FontAwesomeIcon);

app.mount("#app");
