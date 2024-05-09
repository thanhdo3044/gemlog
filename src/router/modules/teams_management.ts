import { $t } from "@/plugins/i18n";

const { VITE_HIDE_HOME } = import.meta.env;
const Layout = () => import("@/layout/index.vue");

export default {
  path: "/teams-management",
  name: "Teams Management",
  component: Layout,
  redirect: "/teams-management",
  meta: {
    icon: "streamline:user-multiple-group",
    title: $t("Teams Management"),
    rank: 4
  },
  children: [
    {
      path: "/teams-management",
      name: "Teams Management",
      component: () => import("@/views/teams_management/index.vue"),
      meta: {
        title: $t("Teams Management"),
        showLink: VITE_HIDE_HOME === "true" ? false : true
      }
    }
  ]
} satisfies RouteConfigsTable;
