import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { GridToolbarContainer, GridToolbarQuickFilter } from "@mui/x-data-grid";
const CustomDataGridToolBar = (props) => {
  return (
    <GridToolbarContainer>
      <Box
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >
        <Typography variant="h5">Data Grid</Typography>
        <GridToolbarQuickFilter />
      </Box>
    </GridToolbarContainer>
  );
};

export default CustomDataGridToolBar;
