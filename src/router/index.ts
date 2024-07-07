import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import DiscoverUs from "../views/DiscoverUs.vue";
import HowItWorks from "../views/HowItWorks.vue";
import community from "../views/Community.vue";
import Blog from "../views/Blog.vue";
import FAQ from "../views/FAQ.vue";
import Company from "../views/Company.vue";
import Contact from "../views/Contact.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
    meta: { title: "Home" },
  },
  {
    path: "/discover-us",
    name: "Discover Us",
    component: DiscoverUs,
  },
  {
    path: "/how-it-works",
    name: "How It Works",
    component: HowItWorks,
  },
  {
    path: "/community",
    name: "Community",
    component: community,
  },
  {
    path: "/blog",
    name: "Blog",
    component: Blog,
  },
  {
    path: "/FAQ",
    name: "FAQ",
    component: FAQ,
  },
  {
    path: "/company",
    name: "Company",
    component: Company,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = `${to.name?.toString()}`;
  next();
});

export default router;
