import { IAsset, ILocation, IReviews } from "@m/shared";
import { Typography } from "@mui/material";
import { RichTextContent } from "contentful";

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
}

export default function ApartmentDetail({
  title,
  description,
  stars,
  location,
  pricesSection,
  pros,
  cons,
}: ApartmentDetailProps) {
  return (
    <>
      <Typography variant="h4" component={"h2"}>
        {title}
      </Typography>
    </>
  );
}
