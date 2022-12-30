import * as React from "react";
import { connect } from "react-redux";
import axios from "axios";
import MaterialTable from "material-table";
import { ThemeProvider, createTheme } from "@mui/material";

import { setTableData } from "../../actions/dataActions";
import tableIcons from "./TableIcons";

const columns = [
  { title: "Id", field: "id" },
  { title: "Name", field: "name" },
  { title: "Email", field: "email" },
  { title: "City", field: "address.city" },
  { title: "Phone", field: "phone" },
  { title: "Website", field: "website" },
  { title: "Company", field: "company.name" },
];

const DataTable = (props) => {
  const [filtering, setFiltering] = React.useState(false);

  const tableActions = [
    {
      icon: tableIcons.Delete,
      tooltip: "Delete User",
      onClick: (event, rowData) => alert("You want to delete: " + rowData.name),
    },
    {
      icon: tableIcons.Edit,
      tooltip: "Edit User",
      onClick: (event, rowData) => alert("You want to edit:  " + rowData.name),
    },
    {
      icon: tableIcons.FilterAlt,
      tooltip: "Filter",
      isFreeAction: true,
      onClick: () => {
        setFiltering((currentFilter) => !currentFilter);
      },
    },
  ];

  React.useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios("https://jsonplaceholder.typicode.com/users").then((res) => {
      console.log(res);
      props.setTableData(res.data);
    });
  };

  const defaultMaterialTheme = createTheme();

  return (
    <ThemeProvider theme={defaultMaterialTheme}>
      <MaterialTable
        title="Data Table"
        actions={tableActions}
        columns={columns}
        data={props.tableData}
        icons={tableIcons}
        options={{ filtering }}
      />
    </ThemeProvider>
  );
};

const mapStateToProps = (state) => ({
  ...state,
});

const mapDispatchToProps = (dispatch) => ({
  setTableData: (tableData) => dispatch(setTableData(tableData)),
});
export default connect(mapStateToProps, mapDispatchToProps)(DataTable);
