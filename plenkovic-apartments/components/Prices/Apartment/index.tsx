import RichText from "@c/RichText";
import { IAsset } from "@m/shared";
import { Card, CardContent, CardHeader, CardMedia } from "@mui/material";
import { getStarsIcons } from "@u/apartment";
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
          <>
            {getStarsIcons(stars).map((Icon, index) => (
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
