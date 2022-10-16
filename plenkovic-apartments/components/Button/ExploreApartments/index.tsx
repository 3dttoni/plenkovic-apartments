import { Button, Grid } from "@mui/material";
import Link from "next/link";
import BedIcon from "@mui/icons-material/Bed";
import { appRoutes } from "@u/routes";
import { analyticsEvent } from "@u/gtag";
import { EventsEnum } from "@e/events";
import { useContext } from "react";
import { AppContext } from "@c/App/context";

export default function ButtonExploreApartments() {
  const { pathname } = useContext(AppContext);

  return (
    <Link href={appRoutes.apartments.path}>
      <Button
        component="a"
        variant="contained"
        color="info"
        onClick={() => {
          analyticsEvent(EventsEnum.EXPLORE_APARTMENTS, {
            pathname,
          });
        }}
      >
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
