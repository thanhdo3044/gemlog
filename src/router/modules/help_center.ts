const { VITE_HIDE_HOME } = import.meta.env;
const Layout = () => import("@/layout/index.vue");

export default {
  path: "/help-center",
  name: "Help Center",
  component: Layout,
  redirect: "/help-center",
  meta: {
    icon: "material-symbols:help-outline",
    title: "Help Center",
    rank: 14
  },
  children: [
    {
      path: "/help-center",
      name: "Help Center",
      component: () => import("@/views/help_center/index.vue"),
      meta: {
        title: "Help Center",
        showLink: VITE_HIDE_HOME === "true" ? false : true
      }
    }
  ]
} satisfies RouteConfigsTable;
