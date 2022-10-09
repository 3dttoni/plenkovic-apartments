import HomeApartment, { HomeApartmentProps } from "@c/Home/Apartment";
import HomeContactUsCard from "@c/Card/ContactUs";
import HomeHeadingSlides from "@c/Home/HeadingSlides";
import RichText from "@c/RichText";
import { Card, CardContent, Grid, Typography } from "@mui/material";
import { HomePageProps } from "@p/index";
import { useEffect, useState } from "react";
import useIsMobile from "@h/useIsMobile";

export default function Home({
  headingSlides,
  headingText,
  introText,
  apartments,
}: HomePageProps) {
  const animationEffect = useIsMobile() ? "flip" : "fade";
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
      <Grid
        container
        alignItems="center"
        sx={{
          display: { md: "flex", xs: "none" },
          height: { xs: "auto", md: 550 },
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
        <HomeHeadingSlides headingSlides={headingSlides} />
        <Grid item xs={9} data-aos={`${animationEffect}-left`}>
          <RichText json={headingText} />
        </Grid>
      </Grid>
      <Card
        data-aos="flip-left"
        sx={{
          display: { md: "none", xs: "inherit" },
          my: 4,
        }}
        elevation={5}
      >
        <CardContent>
          <RichText json={headingText} />
        </CardContent>
      </Card>
      <Grid container direction="column">
        <Grid container my={{ md: 3 }} justifyContent="space-between">
          <Grid
            item
            xs={12}
            md={9}
            mt={{ md: 4 }}
            data-aos={`${animationEffect}-right`}
          >
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
            data-aos={`flip-left`}
          >
            <HomeContactUsCard />
          </Grid>
        </Grid>
        <Typography mt={6} variant="h2">
          Apartments
        </Typography>
        {apartmentsSummary.map(({ summary, banner, imagePosition }) => (
          <Grid
            data-aos={`${animationEffect}-${imagePosition}`}
            item
            key={banner.url}
          >
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
