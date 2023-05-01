import { Stack, Rating } from "@mui/material";
import React, { useState } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

export const MuiRating = () => {
  const [value, setValue] = useState<number | null>(null);
  console.log(value);
  const handleChange = (
    _event: React.ChangeEvent<{}>,
    newValue: number | null
  ) => {
    setValue(newValue);
  };
  return (
    <Stack spacing={2}>
      <Rating
        size="large"
        value={value}
        precision={0.5}
        onChange={handleChange}
        icon={<FavoriteIcon fontSize="inherit" color="error" />}
        emptyIcon={<FavoriteIcon fontSize="inherit" />}
      />
    </Stack>
  );
};
