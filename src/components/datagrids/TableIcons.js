import AddBoxIcon from "@mui/icons-material/AddBox";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditIcon from "@mui/icons-material/Edit";
import FilterListIcon from "@mui/icons-material/FilterList";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronRight";
import LastPageIcon from "@mui/icons-material/LastPage";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import ClearIcon from "@mui/icons-material/Clear";
import SearchIcon from "@mui/icons-material/Search";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import FilterAltIcon from "@mui/icons-material/FilterAlt";

const tableIcons = {
  Add: React.forwardRef((props, ref) => <AddBoxIcon {...props} ref={ref} />),
  Delete: React.forwardRef((props, ref) => (
    <DeleteOutlineIcon {...props} ref={ref} />
  )),
  // Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: React.forwardRef((props, ref) => <ClearIcon {...props} ref={ref} />),
  // DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  Edit: React.forwardRef((props, ref) => <EditIcon {...props} ref={ref} />),
  // Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: React.forwardRef((props, ref) => (
    <FilterListIcon {...props} ref={ref} />
  )),
  FirstPage: React.forwardRef((props, ref) => (
    <FirstPageIcon {...props} ref={ref} />
  )),
  LastPage: React.forwardRef((props, ref) => (
    <LastPageIcon {...props} ref={ref} />
  )),
  NextPage: React.forwardRef((props, ref) => (
    <ChevronRightIcon {...props} ref={ref} />
  )),
  PreviousPage: React.forwardRef((props, ref) => (
    <ChevronLeftIcon {...props} ref={ref} />
  )),
  ResetSearch: React.forwardRef((props, ref) => (
    <ClearIcon {...props} ref={ref} />
  )),
  Search: React.forwardRef((props, ref) => <SearchIcon {...props} ref={ref} />),
  SortArrow: React.forwardRef((props, ref) => (
    <ArrowDownwardIcon {...props} ref={ref} />
  )),
  // ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  FilterAlt: React.forwardRef((props, ref) => (
    <FilterAltIcon {...props} ref={ref} />
  )),
};

export default tableIcons;
