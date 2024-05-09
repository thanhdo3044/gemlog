const { VITE_HIDE_HOME } = import.meta.env;
const Layout = () => import("@/layout/index.vue");

export default {
  path: "/history",
  name: "History",
  component: Layout,
  redirect: "/history",
  meta: {
    icon: "vaadin:time-forward",
    title: "History",
    rank: 13
  },
  children: [
    {
      path: "/history",
      name: "History",
      component: () => import("@/views/history/index.vue"),
      meta: {
        title: "History",
        showLink: VITE_HIDE_HOME === "true" ? false : true
      }
    }
  ]
} satisfies RouteConfigsTable;
