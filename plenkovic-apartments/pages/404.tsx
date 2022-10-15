import { Grid } from "@mui/material";
import Image from "next/image";
import PageNotFoundLogo from "/public/404.svg";

export default function Custom404() {
  return (
    <Grid container mt={6} justifyContent={"center"}>
      <Image src={PageNotFoundLogo} />
    </Grid>
  );
}
