const { VITE_HIDE_HOME } = import.meta.env;
const Layout = () => import("@/layout/index.vue");

export default {
  path: "/2fa",
  name: "2fa",
  component: Layout,
  redirect: "/2fa",
  meta: {
    icon: "arcticons:2fas-auth",
    title: "2fa",
    rank: 5
  },
  children: [
    {
      path: "/2fa",
      name: "2fa",
      component: () => import("@/views/2fa/index.vue"),
      meta: {
        title: "2FA",
        showLink: VITE_HIDE_HOME === "true" ? false : true
      }
    }
  ]
} satisfies RouteConfigsTable;
