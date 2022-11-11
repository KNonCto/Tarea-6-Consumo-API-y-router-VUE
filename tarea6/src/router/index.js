import { createRouter, createWebHistory } from "vue-router";

import JobsView from "../views/JobsView.vue";
import ApplicationsView from "../views/ApplicationsView.vue";

const routes = [
  {
    path: "/",
    name: "jobs",
    component: JobsView,
  },
  {
    path: "/applications/:id",
    name: "applications",
    component: ApplicationsView,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
