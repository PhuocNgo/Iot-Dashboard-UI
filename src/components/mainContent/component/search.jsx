import SearchIcon from "@mui/icons-material/Search";
import { AppBar, Button, InputBase, Toolbar, Box } from "@mui/material";
import { alpha, styled } from "@mui/system";
import handleSearch from "./handleSearch";
import { useState } from "react";

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "50%", // Giảm chiều rộng xuống 50%
  display: "flex",
  alignItems: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

function SearchBar({ apiEndpoint, setData }) {
  const [searchWord, setSearchWord] = useState("");

  return (
    <Box
      sx={{
        flexGrow: 1,
        width: "50%",
      }}
      fontSize={"16px"}
    >
      <AppBar position="static" sx={{ borderRadius: "3px" }}>
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexGrow: 1,
            }}
          >
            <Search>
              <SearchIconWrapper>
                <SearchIcon sx={{ fontSize: 20 }} />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
                sx={{ padding: "2px", fontSize: "16px", height: "100%" }}
                onChange={(event) => {
                  setSearchWord(event.target.value);
                }}
              />
            </Search>
            <Button
              variant="outlined"
              sx={{
                marginLeft: 1,
                height: "100%",
                width: "20%",
                fontSize: "16px",
                color: "#1976d2",
                backgroundColor: "#fff",
                "&:hover": {
                  backgroundColor: "#fff",
                },
              }}
              onClick={() => {
                if (searchWord.trim() !== "") {
                  handleSearch(searchWord, apiEndpoint, setData);
                }
              }}
            >
              Search
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default SearchBar;
