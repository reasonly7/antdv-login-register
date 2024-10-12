import { DynamicRouteName } from "@/router/dynamicRouteMap";

export const enum ResourceType {
  page = "page",
  layout = "layout",
}

export type ResourceTreeItem =
  | {
      type: ResourceType.page;
      path: string;
      name: DynamicRouteName;
      meta: { title: string };
    }
  | {
      type: ResourceType.layout;
      path: string;
      name: DynamicRouteName;
      redirect: string;
      children: ResourceTreeItem[];
      meta: { title: string };
    };

const mockData: ResourceTreeItem[] = [
  {
    type: ResourceType.layout,
    name: DynamicRouteName.UserLayout,
    path: "",
    redirect: "/dashboard",
    meta: { title: "User Layout" },
    children: [
      {
        type: ResourceType.page,
        path: "/dashboard",
        name: DynamicRouteName.Dashboard,
        meta: { title: "Dashboard" },
      },
    ],
  },
];

export const resourceApi = {
  getTree() {
    return new Promise<ResourceTreeItem[]>((resolve) => {
      resolve(mockData);
    });
  },
};
