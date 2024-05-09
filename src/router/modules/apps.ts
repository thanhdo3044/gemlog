const { VITE_HIDE_HOME } = import.meta.env;
const Layout = () => import("@/layout/index.vue");

export default {
  path: "/apps",
  name: "Apps",
  component: Layout,
  redirect: "/apps",
  meta: {
    icon: "fluent:app-folder-16-regular",
    title: "Apps",
    rank: 8
  },
  children: [
    {
      path: "/apps",
      name: "Apps",
      component: () => import("@/views/apps/index.vue"),
      meta: {
        title: "Apps",
        showLink: VITE_HIDE_HOME === "true" ? false : true
      }
    }
  ]
} satisfies RouteConfigsTable;
