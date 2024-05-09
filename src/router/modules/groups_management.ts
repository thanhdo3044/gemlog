const { VITE_HIDE_HOME } = import.meta.env;
const Layout = () => import("@/layout/index.vue");

export default {
  path: "/groups-management",
  name: "Groups Management",
  component: Layout,
  redirect: "/groups-management",
  meta: {
    icon: "healthicons:group-discussion-meetingx3-outline",
    title: "Groups Management",
    rank: 1
  },
  children: [
    {
      path: "/groups-management",
      name: "Groups Management",
      component: () => import("@/views/groups_management/index.vue"),
      meta: {
        title: "Groups Management",
        showLink: VITE_HIDE_HOME === "true" ? false : true
      }
    }
  ]
} satisfies RouteConfigsTable;
