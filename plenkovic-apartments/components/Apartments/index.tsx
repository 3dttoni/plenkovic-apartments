import ApartmentDetail from "@c/Apartments/Detail";
import { Grid } from "@mui/material";
import { ApartmentsPageProps } from "@p/apartments";

export default function Apartments({ apartments }: ApartmentsPageProps) {
  return (
    <main>
      <Grid container spacing={4}>
        {apartments.map((props, index) => (
          <Grid item xs={12} key={index}>
            <ApartmentDetail {...props} key={index} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
}
