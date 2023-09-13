import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import { deepOrange, deepPurple } from "@mui/material/colors";
import Checkbox from "@mui/material/Checkbox";
import Slider from "@mui/material/Slider";
import Chip from "@mui/material/Chip";
import Container from '@mui/material/Container';

export default function Material() {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  return (
    <Container maxWidth="lg">
      <Stack direction="row" spacing={2}>
        <Button
          onClick={() => {
            alert("Hello");
          }}
          color="primary"
        >
          Secondary
        </Button>
        <Button variant="contained" color="primary" size="large">
          Success
        </Button>
        <Button variant="outlined" color="error">
          Error
        </Button>
        <Checkbox {...label} />
        <Slider aria-label="Volume" />
        <Chip label="Clickable" />
        <Chip label="Clickable" variant="outlined" />
      </Stack>
    </Container>
  );
}
