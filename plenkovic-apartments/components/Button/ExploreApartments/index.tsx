import { Button, Grid } from "@mui/material";
import Link from "next/link";
import BedIcon from "@mui/icons-material/Bed";

export default function ButtonExploreApartments() {
  return (
    <Link href="/apartments">
      <Button component="a" variant="contained" color='info'>
        <Grid container alignItems={"center"} spacing={2}>
          <Grid item>
            <BedIcon />
          </Grid>
          <Grid item>Explore apartments</Grid>
        </Grid>
      </Button>
    </Link>
  );
}
