import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import TreatmentSection from "../views/Section/TreatmentSection.vue";
import ArticleSection from "../views/Section/ArticleSection.vue";
import BrochureSection from "../views/Section/BrochureSection.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,

    },
    {
      path: "/treatment",
      name: "treatment",
      component: TreatmentSection,
    },
    {
      path: "/article",
      name: "article",
      component: ArticleSection,
    },
    {
      path: "/brochure",
      name: "brochure",
      component: BrochureSection,
    },
    // {
    //   path: "/about",
    //   name: "about",
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import("../views/AboutView.vue"),
    // },
  ],
});

export default router;
