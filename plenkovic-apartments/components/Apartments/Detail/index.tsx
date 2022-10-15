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
    <Card elevation={0} sx={{
      backgroundColor: index % 2 === 0 ? 'grey.50' : 'background.paper'
    }}>
      <Grid container spacing={4} px={4}>
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
          <CardContent>
            <Grid container spacing={4} flexDirection={'column'}>
              <Grid item>
                <RichText json={description} />
              </Grid>
              <Grid item>
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
              <Grid item>
                <RichText json={pros} />
              </Grid>
              <Grid item>
                <RichText json={cons} />
              </Grid>
            </Grid>
          </CardContent>
        </Grid>
        <Grid
          item
          xs={12}
          md={4}
          container
          mt={4}
          alignContent={"start"}
          spacing={6}
        >
          <Grid item>
            <RichText json={pricesSection} />
          </Grid>
          <Grid item>
            <CardContactUs/>
          </Grid>
        </Grid>
      </Grid>
    </Card>
  );
}
