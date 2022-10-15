import CardContactUs from "@c/Card/ContactUs";
import RichText from "@c/RichText";
import { IAsset, ILocation, IReviews } from "@m/shared";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
} from "@mui/material";
import { getStarsIcons } from "@u/apartment";
import { RichTextContent } from "contentful";
import { useCallback } from "react";
import ReactImageGallery from "react-image-gallery";

export interface ApartmentDetailProps {
  title: string;
  description: RichTextContent;
  stars: number;
  location: ILocation;
  headerImage: IAsset;
  pricesSection: RichTextContent;
  reviewsCollection: IReviews[];
  pros: RichTextContent;
  cons: RichTextContent;
  gallery: IAsset[];
  index?: number;
}

export default function ApartmentDetail({
  title,
  description,
  stars,
  pricesSection,
  pros,
  cons,
  headerImage,
  gallery,
  index = 0,
}: ApartmentDetailProps) {
  const getStars = useCallback(() => {
    return getStarsIcons(stars);
  }, [stars]);

  return (
    <Card
      elevation={0}
      sx={{
        backgroundColor: index % 2 === 0 ? "grey.50" : "background.paper",
      }}
    >
      <Grid container spacing={{ md: 4 }} px={{ md: 4 }} pb={{ xs: 6, md: 0 }}>
        <Grid item xs={12} md={8}>
          <CardHeader
            title={title}
            subheader={
              <>
                {getStars().map((Icon, index) => (
                  <Icon color="success" key={index} />
                ))}
              </>
            }
          />
          <CardMedia
            src={headerImage.url}
            alt={headerImage.title}
            component="img"
            height={500}
          />
          <Grid container spacing={{ md: 4 }} flexDirection={"column"}>
            <Grid item xs={12}>
              <RichText json={description} />
            </Grid>
            <Grid item xs={12}>
              <ReactImageGallery
                items={gallery.map(({ url }) => ({
                  original: url,
                  thumbnail: url,
                  originalHeight: 460,
                }))}
                slideInterval={4000}
                autoPlay
              />
            </Grid>
            <Grid item xs={12}>
              <RichText json={pros} />
            </Grid>
            <Grid item xs={12}>
              <RichText json={cons} />
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          xs={12}
          md={4}
          container
          mt={{ md: 6 }}
          alignContent={{ md: "start" }}
          spacing={4}
        >
          <Grid item xs={12}>
            <RichText json={pricesSection} />
          </Grid>
          <Grid item xs={12} flex={{ xs: 1, md: 0 }} px={{ xs: 1, md: 0 }}>
            <CardContactUs />
          </Grid>
        </Grid>
      </Grid>
    </Card>
  );
}
