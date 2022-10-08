import { Button } from "@mui/material";

export default function ButtonContactUs() {
  return (
    <Button
      variant="contained"
      component="a"
      href={`mailto:${process.env.CONTACT_EMAIL}`}
      color="info"
    >
      Contact us
    </Button>
  );
}
