import SearchIcon from "@mui/icons-material/Search";
import { AppBar, InputBase, Toolbar } from "@mui/material";
import { alpha, Box, styled } from "@mui/system";
import handleOnKeyDown from "./handleOnKeyDown";

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
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
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

function SearchBar({ data, setData }) {
  return (
    <Box sx={{ flexGrow: 1 }} fontSize={"16px"}>
      <AppBar position="static" sx={{ borderRadius: "3px" }}>
        <Toolbar>
          <Search sx={{ flexGrow: 1 }}>
            <SearchIconWrapper>
              <SearchIcon sx={{ fontSize: 20 }} />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
              sx={{ padding: "2px", fontSize: "16px" }}
              onKeyDown={(event) => handleOnKeyDown(event, data, setData)}
            />
          </Search>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default SearchBar;
