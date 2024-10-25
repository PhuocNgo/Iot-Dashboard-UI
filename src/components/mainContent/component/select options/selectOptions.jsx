import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function SelectOptions({
  label,
  menuItems = [{ fieldItem: "time" }],
  handleChangeItem = (value) => {
    console.log(value);
  },
}) {
  const [field, setField] = React.useState("");

  const handleChange = (event) => {
    const value = event.target.value;
    setField(value);
    handleChangeItem(value);
  };

  return (
    <Box
      sx={{
        width: "30%",
        marginTop: "16px",
      }}
    >
      <FormControl fullWidth>
        <InputLabel
          sx={{
            fontSize: "16px",
          }}
          id="demo-simple-select-label"
        >
          {label}
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={field}
          label={label}
          onChange={handleChange}
          sx={{
            fontSize: "16px",
          }}
        >
          {menuItems.map((menuItem) => {
            return (
              <MenuItem
                sx={{
                  fontSize: "16px",
                }}
                value={menuItem.fieldItem}
              >
                {menuItem.fieldItem.substring(0, 1).toUpperCase() +
                  menuItem.fieldItem.substring(1)}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </Box>
  );
}
