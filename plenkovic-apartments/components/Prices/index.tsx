import PricesApartment from "@c/Prices/Apartment";
import useAnimationEffect from "@h/useAnimationEffect";
import { Grid, Typography } from "@mui/material";
import { PricesPageProps } from "@p/prices";

export default function Prices({ apartments }: PricesPageProps) {
  const animationEffect = useAnimationEffect()

  return (
    <main>
      <Typography my={5} variant={"h3"} component={"h1"}>
        Price list
      </Typography>
      <Grid container spacing={4}>
        {apartments.map((props, index) => (
          <Grid
            key={index}
            item
            xs={12}
            md={6}
            data-aos={`${animationEffect}-${
              index % 2 !== 0 ? "left" : "right"
            }`}
          >
            <PricesApartment key={index} {...props} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
}
