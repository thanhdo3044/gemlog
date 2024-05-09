const { VITE_HIDE_HOME } = import.meta.env;
const Layout = () => import("@/layout/index.vue");

export default {
  path: "/developer-api",
  name: "Developer/API",
  component: Layout,
  redirect: "/developer-api",
  meta: {
    icon: "flowbite:user-add-outline",
    title: "Developer/API",
    rank: 9
  },
  children: [
    {
      path: "/developer-api",
      name: "Developer/API",
      component: () => import("@/views/developer_api/index.vue"),
      meta: {
        title: "Developer/API",
        showLink: VITE_HIDE_HOME === "true" ? false : true
      }
    }
  ]
} satisfies RouteConfigsTable;
