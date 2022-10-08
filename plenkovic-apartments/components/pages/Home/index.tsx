import HomeApartment from "@c/pages/Home/Apartment";
import HomeContactUsCard from "@c/pages/Home/ContactUsCard";
import HomeHeadingSlides from "@c/pages/Home/HeadingSlides";
import RichText from "@c/RichText";
import { Grid, Typography } from "@mui/material";
import { HomePageProps } from "@p/index";

export default function HomePageComponent({
  headingSlides,
  headingText,
  introText,
  apartments,
}: HomePageProps) {
  return (
    <main>
      <HomeHeadingSlides headingSlides={headingSlides} />
      <Grid
        container
        alignItems="center"
        sx={{
          height: 550,
          color: "white",
          h1: {
            fontSize: "5rem",
            mb: 2,
          },
          h2: {
            fontSize: "4rem",
            mt: 2,
          },
          p: {
            fontSize: "1.5rem",
          },
        }}
      >
        <Grid item xs={9} data-aos="fade-down">
          <RichText json={headingText} />
        </Grid>
      </Grid>
      <Grid container direction="column">
        <Grid container my={3} justifyContent="space-between">
          <Grid item xs={9} mt={4} data-aos="fade-down-right">
            <RichText json={introText} />
          </Grid>
          <Grid item xs={2} mt={-6} data-aos="fade-left">
            <HomeContactUsCard />
          </Grid>
        </Grid>
        <Typography mt={6} variant="h2">
          Apartments
        </Typography>
        {apartments.map(({ summary, banner }, index) => (
          <Grid
            data-aos={`fade-${index % 2 == 0 ? "left" : "right"}`}
            item
            key={banner.url}
          >
            <HomeApartment
              imagePosition={index % 2 === 0 ? "left" : "right"}
              summary={summary}
              banner={banner}
            />
          </Grid>
        ))}
      </Grid>
    </main>
  );
}
