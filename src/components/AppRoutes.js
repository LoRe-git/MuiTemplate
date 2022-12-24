import * as React from "react";
import MainMenuDrawer from "./components/MainMenuDrawer";

import DataTable from "./components/datagrids/DataTable";
import DataGridTable from "./components/datagrids/DataGridTable";
const Routes = [
  {
    path: '/',
    sidebarName: 'Home',
    component: Home
  },
  {
    path: '/standings',
    sidebarName: 'Standings',
    component: Standings
  },
  {
    path: '/teams',
    sidebarName: 'Teams',
    component: Teams
  },
];

export default Routes;