const { VITE_HIDE_HOME } = import.meta.env;
const Layout = () => import("@/layout/index.vue");

export default {
  path: "/billing-plans",
  name: "Blling Plans",
  component: Layout,
  redirect: "/billing-plans",
  meta: {
    icon: "circum:money-check-1",
    title: "Blling/Plans",
    rank: 10
  },
  children: [
    {
      path: "/billing-plans",
      name: "Blling Plans",
      component: () => import("@/views/billing_plans/index.vue"),
      meta: {
        title: "Blling Plans",
        showLink: VITE_HIDE_HOME === "true" ? false : true
      }
    }
  ]
} satisfies RouteConfigsTable;
