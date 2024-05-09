const { VITE_HIDE_HOME } = import.meta.env;
const Layout = () => import("@/layout/index.vue");

export default {
  path: "/sysncs-data",
  name: "Sysncs Data",
  component: Layout,
  redirect: "/sysncs-data",
  meta: {
    icon: "mdi:users-add-outline",
    title: "Sysncs Data",
    rank: 11
  },
  children: [
    {
      path: "/sysncs-data",
      name: "Sysncs Data",
      component: () => import("@/views/sysncs_data/index.vue"),
      meta: {
        title: "Sysncs Data",
        showLink: VITE_HIDE_HOME === "true" ? false : true
      }
    }
  ]
} satisfies RouteConfigsTable;
