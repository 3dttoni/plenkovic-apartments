import { IChildren } from "@i/common";
import { Box } from "@mui/material";

export default function HideMobile({ children }: IChildren) {
  return (
    <Box
      sx={{
        display: { xs: "none", md: "block" },
      }}
    >
      {children}
    </Box>
  );
}
