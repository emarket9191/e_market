import React, { Component, useContext, useEffect, useState } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import Button from "@material-ui/core/Button";
import SearchIcon from "@material-ui/icons/Search";
import { getAllProducts } from "../api/index";
import { Link } from "react-router-dom";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const columns = [
  { key: 1, id: "index", label: "#", minWidth: 100 },
  { key: 2, id: "serial_number", label: "Serial number", minWidth: 100 },
  { key: 3, id: "category", label: "Category", minWidth: 100 },
  { key: 4, id: "product_Name", label: "Product name", minWidth: 100 },
  { key: 5, id: "price_per_unit", label: "Price", minWidth: 100 },
  { key: 6, id: "unit_in_package", label: "Quantity", minWidth: 100 },
  { key: 7, id: "quantity_in_stuck", label: "Inventory", minWidth: 100 },
  //{ key: 8, id: "edit", label: "Edit", minWidth: 100 },
  { key: 9, id: "pause_time", label: "Pause/Activated", minWidth: 100 },
  // { key: 10, id: "delete", label: "Delete", minWidth: 100 },
];

// const rows = [
//   createData("India", "IN", "1324171354", "3287263"),
//   createData("China", "CN", 1403500365, 9596961),
//   createData("Italy", "IT", 60483973, 301340),
//   createData("United States", "US", 327167434, 9833520),
//   createData("Canada", "CA", 37602103, 9984670),
//   createData("Australia", "AU", 25475400, 7692024),
//   createData("Germany", "DE", 83019200, 357578),
//   createData("Ireland", "IE", 4857000, 70273),
//   createData("Mexico", "MX", 126577691, 1972550),
//   createData("Japan", "JP", 126317000, 377973),
//   createData("France", "FR", 67022000, 640679),
//   createData("United Kingdom", "GB", 67545757, 242495),
//   createData("Russia", "RU", 146793744, 17098246),
//   createData("Nigeria", "NG", 200962417, 923768),
//   createData("Brazil", "BR", 210147125, 8515767),
// ];

const useStyles = makeStyles({
  root: {
    width: "100%",
    Top: "20%",
  },
  container: {
    maxHeight: 440,
  },
});

function createData(
  index,
  product_Name,
  serial_number,
  category,
  package_dimension,
  package_weight,
  price_per_unit,
  unit_in_package,
  quantity_in_stuck,
  product_description,
  shipment,
  service,
  fob,
  submit_time,
  pause_time
) {
  return {
    index,
    product_Name,
    serial_number,
    category,
    package_dimension,
    package_weight,
    price_per_unit,
    unit_in_package,
    quantity_in_stuck,
    product_description,
    shipment,
    service,
    fob,
    submit_time,
    pause_time,
  };
}

export default function ProductTable({ controls }) {
  const [state, setState] = useState([]);
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const uploadAllProducts = async () => {
    const response = await getAllProducts();
    const array = response.data.data;
    setState(array);
  };
  useEffect(() => {
    uploadAllProducts();
  }, []);
 
  const filteredState = React.useMemo(() => {
    const step1 = state.filter((row) => {
      if (controls.textSearch) {
        return row.product_Name.includes(controls.textSearch);
      }

        
        // let sort=[...state].sort((a, b) => b.updatedAt - a.updatedAt);
        // let sort=[...state].sort((a, b) => b.unit_in_package - a.unit_in_package);
        // setState(sort);
      
      return true;
    });

    if (controls.isSorted) {
      step1.sort((a, b) => {
        return (new Date(b.updatedAt) - new Date(a.updatedAt))
      });
    }

    return step1;
  }, [controls, state]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <div>
      <Paper className={classes.root}>
        <TableContainer className={classes.container}>
          <Table className={classes.table} aria-label="customized table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <StyledTableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </StyledTableCell>
                ))}
                <StyledTableCell
                   
                  >
                   Edit
                  </StyledTableCell>
                  <StyledTableCell
                  
                  >
                   Delete
                  </StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredState
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={row.code}
                    >
                      {columns.map((column) => {
                        const x = createData(
                          index + 1,
                          row.product_Name,
                          row.serial_number,
                          row.category,
                          row.package_dimension,
                          row.package_weight,
                          row.price_per_unit,
                          row.unit_in_package,
                          row.quantity_in_stuck,
                          row.product_description,
                          row.shipment,
                          row.service,
                          row.fob,
                          row.submit_time,
                          row.pause_time
                        );
                        console.log(x);
                        const value = x[column.id];
                        return (
                          <TableCell key={column.id}>
                            {column.format && typeof value === "number"
                              ? column.format(value)
                              : value}
                            {/* {value} */}
                          </TableCell>
                        );
                      })}
                      <TableCell>
                        <Link to={`/edit/${row._id}`}>Edit</Link>
                      </TableCell>
                      <TableCell>
                        <Link to={`/Delete/${row._id}`}>Delete</Link>
                      </TableCell>
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <div className="PaginationContainer">
          <Button
            id="archiveFeedback"
            className="GreyButton"
            variant="contained"
            disableElevation
            size="small"
          >
            Archive Products
          </Button>
          <TablePagination
            className="TablePagination"
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={state.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
          />
        </div>
        <Button
          id="ProductGoToPage"
          size="small"
          variant="contained"
          className={classes.button}
          endIcon={<SearchIcon />}
        >
          go to page
        </Button>
      </Paper>

      <Button
        id="productFeedback"
        className="GreyButton"
        variant="contained"
        disableElevation
        size="small"
      >
        FeedBack
      </Button>
      <p>{state.length}</p>
    </div>
  );
}
