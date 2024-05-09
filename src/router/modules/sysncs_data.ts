const { VITE_HIDE_HOME } = import.meta.env;
const Layout = () => import("@/layout/index.vue");

export default {
  path: "/sysnc-data",
  name: "Sysnc data",
  component: Layout,
  redirect: "/sysnc-data",
  meta: {
    icon: "eos-icons:big-data-outlined",
    title: "Sysnc data",
    rank: 12
  },
  children: [
    {
      path: "/sysnc-data",
      name: "sysncs_data",
      component: () => import("@/views/sysncs_data/index.vue"),
      meta: {
        title: "Sysnc data",
        showLink: VITE_HIDE_HOME === "true" ? false : true
      }
    }
  ]
} satisfies RouteConfigsTable;
