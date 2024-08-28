import React from "react";
import realWeatherData from "./dataForChart";
import { Container } from "@mui/system";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
} from "@mui/material";
import SearchBar from "../sensorsData/search";

const columns = [
  { id: "temperature", label: "Temperature", minWidth: 100 },
  {
    id: "humidity",
    label: "Humidity",
    minWidth: 170,
    align: "right",
  },
];

const rows = realWeatherData;

export default function Test() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(4);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Container>
      <Typography sx={{ fontSize: "36px", mb: "16px" }}>
        Sensors Data
      </Typography>
      <SearchBar />
      <Paper sx={{ width: "100%", overflow: "hidden", mb: "20px", mt: "16px" }}>
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
              {rows
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
            "& .MuiTablePagination-selectLabel, .MuiTablePagination-displayedRows, .MuiMenuItem-root ":
              {
                fontSize: "16px",
              },
            fontSize: "16px",
          }}
          rowsPerPageOptions={[4, 8, 10]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Container>
  );
}
