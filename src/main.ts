import { createApp } from "vue";
import { createPinia } from "pinia";
import {Tab,Tabs,Popup } from 'vant'
import App from "./App.vue";
import { Skeleton } from 'vant';
import { Search } from 'vant';
import router from "./router";

import "./assets/main.css";
import "./assets/lib/lib-flexable.js";
import  GlobalComponents  from "@/components";

const app = createApp(App);

app.use(GlobalComponents)


app.use(createPinia());
app.use(router);

app.use(Tab);
app.use(Tabs);
app.use(Popup);
app.use(Skeleton).use(Search);

app.mount("#app");
