import HomeHeadingSlides from "@c/pages/Home/HeadingSlides";
import RichText from "@c/RichText";
import { Box, Grid } from "@mui/material";
import { HomePageProps } from "@p/index";

export default function HomePageComponent({
  headingSlides,
  introText,
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
        <Grid item xs={9}>
          <RichText json={introText} />
        </Grid>
      </Grid>
    </main>
  );
}
