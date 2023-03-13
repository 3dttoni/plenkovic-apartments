import RichText from "@c/RichText";
import { IAsset } from "@m/shared";
import { Card, CardContent, CardHeader, CardMedia, Rating } from "@mui/material";
import { RichTextContent } from "contentful";

export interface PricesApartmentProps {
  priceSection: RichTextContent;
  stars: number;
  image: IAsset;
  title: string;
}
export default function PricesApartment({
  priceSection,
  stars,
  title,
  image,
}: PricesApartmentProps) {

  return (
    <Card elevation={5}>
      <CardHeader
        title={title}
        subheader={
          <Rating defaultValue={stars} precision={0.5} />
        }
      />
      <CardMedia
        component="img"
        height="360"
        image={image.url}
        alt={image.title}
      />
      <CardContent>
        <RichText json={priceSection} />
      </CardContent>
    </Card>
  );
}
