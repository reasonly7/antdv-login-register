export const enum DynamicRouteName {
  UserLayout = "UserLayout",
  Dashboard = "Dashboard",
  NotFound = "NotFound",
}

export const dynamicRouteMap: {
  [key in DynamicRouteName]: () => Promise<unknown>;
} = {
  UserLayout: () => import("@/components/UserLayout.vue"),
  Dashboard: () =>
    import("@/views/dynamic-views/dashboard-view/DashboardView.vue"),
  NotFound: () =>
    import("@/views/static-views/not-found-view/NotFoundView.vue"),
};
