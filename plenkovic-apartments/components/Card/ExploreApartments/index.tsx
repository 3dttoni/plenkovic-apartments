import { Card, CardContent, Grid, Typography } from "@mui/material";
import ButtonExploreApartments from "@c/Button/ExploreApartments";

export default function CardExploreApartments() {
  return (
    <Card
      sx={{
        py: 2,
        px: 4,
        minWidth: "50vw",
        maxWidth: {
          xs: 280,
        },
      }}
      elevation={5}
    >
      <Grid container justifyContent={"space-between"}>
        <Grid item>
          <CardContent>
            <Typography variant="h6" component="div">
              Looking for a dream apartment?{" "}
            </Typography>
            <Grid>
              <Typography variant="subtitle1" mb={3}>
                We help you make your dreams a reality
              </Typography>
            </Grid>
          </CardContent>
        </Grid>
        <Grid item pt={3}>
          <ButtonExploreApartments />
        </Grid>
      </Grid>
    </Card>
  );
}
