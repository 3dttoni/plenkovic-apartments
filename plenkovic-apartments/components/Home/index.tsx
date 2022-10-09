import HomeApartment, { HomeApartmentProps } from "@c/Home/Apartment";
import HomeContactUsCard from "@c/Card/ContactUs";
import HomeHeadingSlides from "@c/Home/HeadingSlides";
import RichText from "@c/RichText";
import { Grid, Typography } from "@mui/material";
import { HomePageProps } from "@p/index";
import { useEffect, useState } from "react";

export default function HomePageComponent({
  headingSlides,
  headingText,
  introText,
  apartments,
}: HomePageProps) {
  const [apartmentsSummary, setApartmentsSummary] = useState<
    HomeApartmentProps[]
  >([]);

  useEffect(() => {
    if (apartments)
      setApartmentsSummary(
        apartments.map(({ summary, banner }, index) => ({
          summary,
          banner,
          imagePosition: index % 2 === 0 ? "left" : "right",
        }))
      );
  }, [apartments]);

  return (
    <main>
      <HomeHeadingSlides headingSlides={headingSlides} />
      <Grid
        container
        alignItems="center"
        sx={{
          height: { xs: "auto", md: 550 },
          color: "white",
          bgcolor: {
            xs: "primary.light",
            md: "transparent",
          },
          h1: {
            fontSize: {
              xs: "3rem",
              md: "5rem",
            },
            mb: 2,
          },
          h2: {
            fontSize: { xs: "2rem", md: "4rem" },
            mt: 2,
          },
          p: {
            fontSize: {
              md: "1.5rem",
              sx: "1.25rem",
            },
          },
          padding: {
            md: 0,
            xs: 1,
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
          <Grid
            item
            sx={{
              mt: {
                xs: 0,
                md: -6,
              },
            }}
            xs={12}
            md={2}
            data-aos="fade-left"
          >
            <HomeContactUsCard />
          </Grid>
        </Grid>
        <Typography mt={6} variant="h2">
          Apartments
        </Typography>
        {apartmentsSummary.map(({ summary, banner, imagePosition }) => (
          <Grid data-aos={`fade-${imagePosition}`} item key={banner.url}>
            <HomeApartment
              imagePosition={imagePosition}
              summary={summary}
              banner={banner}
            />
          </Grid>
        ))}
      </Grid>
    </main>
  );
}
