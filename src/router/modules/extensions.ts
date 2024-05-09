const { VITE_HIDE_HOME } = import.meta.env;
const Layout = () => import("@/layout/index.vue");

export default {
  path: "/extensions",
  name: "Extensions",
  component: Layout,
  redirect: "/extensions",
  meta: {
    icon: "tdesign:extension",
    title: "Extensions",
    rank: 3
  },
  children: [
    {
      path: "/extensions",
      name: "Extensions",
      component: () => import("@/views/extensions/index.vue"),
      meta: {
        title: "Extensions",
        showLink: VITE_HIDE_HOME === "true" ? false : true
      }
    }
  ]
} satisfies RouteConfigsTable;
