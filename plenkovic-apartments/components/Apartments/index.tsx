import ApartmentDetail from "@c/Apartments/Detail";
import { Grid, Typography } from "@mui/material";
import { ApartmentsPageProps } from "@p/apartments";

export default function Apartments({ apartments }: ApartmentsPageProps) {
  return (
    <main>
      <Typography mt={4} mb={3} variant={"h3"} component={"h1"}>
        Apartments
      </Typography>
      <Grid container spacing={6}>
        {apartments.map((props, index) => (
          <Grid item xs={12} key={index}>
            <ApartmentDetail {...props} index={index} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
}
