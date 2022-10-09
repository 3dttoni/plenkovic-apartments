import { AppContext } from "@c/App/context";
import { Button } from "@mui/material";
import { useContext } from "react";

export default function ButtonContactUs() {
  const {
    contact: { email },
  } = useContext(AppContext);

  return (
    <Button
      variant="contained"
      component="a"
      href={`mailto:${email}`}
      color="info"
    >
      Contact us
    </Button>
  );
}
