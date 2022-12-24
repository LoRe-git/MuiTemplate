import * as React from "react";
import MaterialTable from "material-table";
import { ThemeProvider, createTheme } from "@mui/material";
import AddBoxIcon from "@mui/icons-material/AddBox";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditIcon from "@mui/icons-material/Edit";
import ViewColumnIcon from "@mui/icons-material/ViewColumn";

const data = [
  { name: "Mohammad", surname: "Faisal", birthYear: 1995 },
  { name: "Nayeem Raihan ", surname: "Shuvo", birthYear: 1994 }
];

const columns = [
  { title: "Name", field: "name" },
  { title: "Surname", field: "surname" },
  { title: "Birth Year", field: "birthYear", type: "numeric" }
];

const tableIcons = {
  Add: React.forwardRef((props, ref) => <AddBoxIcon {...props} ref={ref} />),
  Delete: React.forwardRef((props, ref) => (
    <DeleteOutlineIcon {...props} ref={ref} />
  )),
  // Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  // Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  // DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  Edit: React.forwardRef((props, ref) => <EditIcon {...props} ref={ref} />),
  // Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  // Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  // FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  // LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  // NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  // PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
  // ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  // Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  // SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
  // ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: React.forwardRef((props, ref) => (
    <ViewColumnIcon {...props} ref={ref} />
  ))
};

const DataTable = (props) => {
  const defaultMaterialTheme = createTheme();
  return (
    <ThemeProvider theme={defaultMaterialTheme}>
      <MaterialTable
        title="Data Table"
        actions={[
          {
            icon: tableIcons.Delete,
            tooltip: "Delete User",
            onClick: (event, rowData) =>
              alert("You want to delete: " + rowData.name)
          },
          {
            icon: tableIcons.Edit,
            tooltip: "Edit User",
            onClick: (event, rowData) =>
              alert("You want to edit:  " + rowData.name)
          },
          {
            icon: tableIcons.Add,
            tooltip: "Add User",
            isFreeAction: true,
            onClick: (event) => alert("You want to add a new row")
          }
        ]}
        columns={columns}
        data={data}
      />
    </ThemeProvider>
  );
};

export default DataTable;
