import RichText from "@c/RichText";
import { IAsset } from "@m/common";
import { Card, CardContent, CardHeader, CardMedia } from "@mui/material";
import { RichTextContent } from "contentful";
import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import StarBorderIcon from "@mui/icons-material/StarBorder";

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
  const starsIcons = [];

  while (stars > 0.5) {
    --stars;
    starsIcons.push(StarIcon);
  }
  if (stars !== 0) starsIcons.push(StarHalfIcon);
  if (starsIcons.length < 5) {
    while (starsIcons.length < 5) {
      starsIcons.push(StarBorderIcon);
    }
  }

  return (
    <Card elevation={5}>
      <CardHeader
        title={title}
        subheader={
          <>
            {starsIcons.map((Icon, index) => (
              <Icon color="success" key={index} />
            ))}
          </>
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
