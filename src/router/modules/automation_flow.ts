export default {
  path: "/automation_flow",
  redirect: "/automation_flow/403",
  meta: {
    icon: "ant-design:robot-outlined",
    // showLink: false,
    title: "Automation Flow",
    rank: 7
  },
  children: [
    // {
    //   path: "/automation_flow/403",
    //   name: "403",
    //   component: () => import("@/views/automation_flow/403.vue"),
    //   meta: {
    //     title: "403"
    //   }
    // },
    // {
    //   path: "/automation_flow/404",
    //   name: "404",
    //   component: () => import("@/views/automation_flow/404.vue"),
    //   meta: {
    //     title: "404"
    //   }
    // },
    // {
    //   path: "/automation_flow/500",
    //   name: "500",
    //   component: () => import("@/views/automation_flow/500.vue"),
    //   meta: {
    //     title: "500"
    //   }
    // }
    
    {
      path: "/automation_flow/scheduler",
      name: "scheduler",
      component: () => import("@/views/automation_flow/403.vue"),
      meta: {
        title: "Scheduler",
        icon: "grommet-icons:plan",
      }
    },
    {
      path: "/automation_flow/workflows",
      name: "workflows",
      component: () => import("@/views/automation_flow/403.vue"),
      meta: {
        title: "Workflows",
        icon: "typcn:flow-children",
      }
    },
    {
      path: "/automation_flow/logs",
      name: "logs",
      component: () => import("@/views/automation_flow/403.vue"),
      meta: {
        title: "Logs",
        icon: "vaadin:time-forward",
      }
    }

  ]
} satisfies RouteConfigsTable;
