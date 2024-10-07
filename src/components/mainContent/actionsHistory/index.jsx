import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { histories } from "./data";
import { Container } from "@mui/system";
import { Typography } from "@mui/material";
import SearchBar from "../component/search";

const columns = [
  { id: "_id", label: "ID", minWidth: 170 },
  { id: "deviceName", label: "Device Name", minWidth: 100 },
  {
    id: "action",
    label: "Action",
    minWidth: 170,
    align: "left",
  },
  { id: "time", label: "Time", minWidth: 170, align: "left" },
];

const rows = [];

export default function ActionsHistory() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(4);
  const [row, setRow] = React.useState(rows);

  React.useEffect(() => {
    setRow(histories);
  }, []);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Container sx={{ mb: "16px" }}>
      <Typography sx={{ fontSize: "36px", mb: "16px" }}>History</Typography>
      <SearchBar
        name={"device_name"}
        apiEndpoint={"history"}
        setData={setRow}
      />
      <Paper sx={{ width: "100%", overflow: "hidden", marginTop: "16px" }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                    sx={{ fontSize: "16px" }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {row
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell
                            sx={{ fontSize: "16px" }}
                            key={column.id}
                            align={column.align}
                          >
                            {value}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          sx={{
            "& .MuiSvgIcon-root": {
              fontSize: "20px",
            },
            "& .MuiTablePagination-selectLabel, .MuiTablePagination-displayedRows":
              {
                fontSize: "16px",
              },
            fontSize: "16px",
          }}
          rowsPerPageOptions={[4, 8, 10]}
          component="div"
          count={row.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Container>
  );
}
