const { VITE_HIDE_HOME } = import.meta.env;
const Layout = () => import("@/layout/index.vue");

export default {
  path: "/proxies-management",
  name: "Proxies Management",
  component: Layout,
  redirect: "/proxies-management",
  meta: {
    icon: "carbon:server-proxy",
    title: "Proxies Management",
    rank: 2
  },
  children: [
    {
      path: "/proxies-anagement",
      name: "Proxies Management",
      component: () => import("@/views/proxies_management/index.vue"),
      meta: {
        title: "Proxies Management",
        showLink: VITE_HIDE_HOME === "true" ? false : true
      }
    }
  ]
} satisfies RouteConfigsTable;
