const { VITE_HIDE_HOME } = import.meta.env;
const Layout = () => import("@/layout/index.vue");

export default {
  path: "/read-mail-imap",
  name: "Read Mail IMAP",
  component: Layout,
  redirect: "/read-mail-imap",
  meta: {
    icon: "material-symbols:mail-outline",
    title: "Read mail IMAP",
    rank: 6
  },
  children: [
    {
      path: "/read-mail-imap",
      name: "Read Mail IMAP",
      component: () => import("@/views/teams_management/index.vue"),
      meta: {
        title: "Read Mail IMAP",
        showLink: VITE_HIDE_HOME === "true" ? false : true
      }
    }
  ]
} satisfies RouteConfigsTable;
