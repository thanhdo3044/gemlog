const { VITE_HIDE_HOME } = import.meta.env;
const Layout = () => import("@/layout/index.vue");

export default {
  path: "/",
  name: "Profile Management",
  component: Layout,
  redirect: "/profile-anagement",
  meta: {
    icon: "ant-design:profile-outlined",
    title: "Profile Management",
    rank: 0
  },
  children: [
    {
      path: "/profile-management",
      name: "Profile Management",
      component: () => import("@/views/profile_management/role/index.vue"),
      meta: {
        title: "Profile Management",
        showLink: VITE_HIDE_HOME === "true" ? false : true
      }
    }
  ]
} satisfies RouteConfigsTable;
