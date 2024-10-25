import { useState, useEffect } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import fetchData from "./data";
import { Container } from "@mui/system";
import { Typography } from "@mui/material";
import SearchBar from "../component/search/search";
import SelectOptions from "../component/select options/selectOptions";

export default function TablePage({ collectionName, columns }) {
  const rows = [];

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(4);
  const [row, setRow] = useState(rows);
  const [totalCount, setTotalCount] = useState(0);
  const [sortField, setSortField] = useState("time");
  const [sortDirection, setSortDirection] = useState("asc");
  const [searchValue, setSearchValue] = useState("");
  const [speciType, setSpeciType] = useState("");

  useEffect(() => {
    const fetch = async () => {
      const response = await fetchData(
        collectionName,
        page + 1,
        rowsPerPage,
        sortField,
        sortDirection,
        searchValue,
        speciType
      );
      setRow(response.data);
      setTotalCount(response.totalCount);
    };

    fetch();
  }, [
    page,
    rowsPerPage,
    sortField,
    sortDirection,
    searchValue,
    speciType,
    collectionName,
  ]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Container sx={{ mb: "16px" }}>
      <Typography sx={{ fontSize: "36px", mb: "16px" }}>
        {collectionName}
      </Typography>

      <SearchBar setSearchValue={setSearchValue} setPage={setPage} />

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "50%",
        }}
      >
        <SelectOptions
          label={"Search With"}
          menuItems={[{ fieldItem: "time" }, { fieldItem: "date" }]}
          handleChangeItem={setSpeciType}
        />

        <SelectOptions label={"Sort Field"} handleChangeItem={setSortField} />

        <SelectOptions
          label={"Sort Direction"}
          menuItems={[{ fieldItem: "asc" }, { fieldItem: "desc" }]}
          handleChangeItem={setSortDirection}
        />
      </div>

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
              {row.length > 0 ? (
                row
                  .slice(0 * rowsPerPage, 0 * rowsPerPage + rowsPerPage)
                  .map((row) => {
                    return (
                      <TableRow
                        hover
                        role="checkbox"
                        tabIndex={-1}
                        key={row.id}
                      >
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
                  })
              ) : (
                <TableRow>
                  <TableCell
                    sx={{ fontSize: "16px" }}
                    colSpan={columns.length}
                    align="center"
                  >
                    No data available
                  </TableCell>
                </TableRow>
              )}
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
          count={totalCount}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Container>
  );
}
