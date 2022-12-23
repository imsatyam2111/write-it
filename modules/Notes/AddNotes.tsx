import { Box, Button } from "@mui/material";

export const AddNotes = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
      <Button variant="contained" sx={{ mr: "36px", px: 2 }}>
        + Add
      </Button>
    </Box>
  );
};
