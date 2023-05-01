import { Box, FormControlLabel, Switch } from "@mui/material";
import React, { useState } from "react";
export const MuiSwitch = () => {
  const [checked, setChecked] = useState(false);
  const onSwitch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
    if (checked) {
      // 본인이 원하는 조건을 넣는다
      alert("checked");
    } else {
      alert("unchecked");
    }
  };
  return (
    <Box>
      <FormControlLabel
        label="Dark mode"
        control={<Switch checked={checked} onChange={onSwitch} />}
      />
    </Box>
  );
};
