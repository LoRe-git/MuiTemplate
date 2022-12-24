import * as React from "react";

import DataTable from "./datagrids/DataTable";
import DataGridTable from "./datagrids/DataGridTable";
import NewComponentTemplate from "./NewComponentTemplate";

const AppRoutes = [
  {
    path: "/",
    sidebarName: "Dashboard",
    component: NewComponentTemplate,
  },
  {
    path: "/datatable",
    sidebarName: "Data Table",
    component: DataTable,
  },
  {
    path: "/datagrid",
    sidebarName: "Data Grid",
    component: DataGridTable,
  },
];

export default AppRoutes;
