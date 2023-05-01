import { Box, TextField, MenuItem } from "@mui/material";
import React, { useState } from "react";
export const MuiSelect = () => {
  // const [country, setCountry] = useState("");
  const [coutries, setCountries] = useState<string[]>([]);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setCountries(typeof value === "string" ? value.split(",") : value);
  };
  return (
    <Box width="250px">
      <TextField
        label="Select country"
        select
        value={coutries}
        onChange={handleChange}
        fullWidth
        SelectProps={{
          multiple: true
        }}
        error
      >
        <MenuItem value="IN">India</MenuItem>
        <MenuItem value="US">USA</MenuItem>
        <MenuItem value="AU">Australia</MenuItem>
      </TextField>
    </Box>
  );
};