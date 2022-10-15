import LocationDescription from "@c/Location/Description";
import LocationMap from "@c/Location/Map";
import useAnimationEffect from "@h/useAnimationEffect";
import { Grid, Typography } from "@mui/material";
import { LocationPageProps } from "@p/location";

export default function Location({ description, location }: LocationPageProps) {
  const animationEffect = useAnimationEffect();

  return (
    <main>
      <Typography mt={4} mb={3} variant={"h3"} component={"h1"}>
        Location
      </Typography>
      <Grid container spacing={6}>
        <Grid item xs={12} data-aos={`${animationEffect}-left`}>
          <LocationDescription description={description} />
        </Grid>
        <Grid item xs={12}>
          <LocationMap location={location} />
        </Grid>
      </Grid>
    </main>
  );
}
