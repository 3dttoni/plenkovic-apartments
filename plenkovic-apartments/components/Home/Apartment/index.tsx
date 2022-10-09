import RichText from "@c/RichText";
import { IAsset } from "@m/common";
import { Box, Grid, Typography } from "@mui/material";
import { RichTextContent } from "contentful";
import Image from "next/image";

export interface HomeApartmentProps {
  summary: RichTextContent;
  banner: IAsset;
  imagePosition: "left" | "right";
}
export default function HomeApartment({
  summary,
  banner,
  imagePosition,
}: HomeApartmentProps) {
  const ImageComponent = (
    <Box sx={{ p: 2 }}>
      <Image
        src={banner.url}
        title={banner.title}
        alt={banner.title}
        height={1330}
        width={1550}
      />
    </Box>
  );
  const RichTextComponent = (
    <Box
      sx={{
        padding: 4,
        p: {
          color: "GrayText",
          fontVariant: "body1",
        },
        h1: {
          color: "black",
        },
      }}
    >
      <Typography variant="body1">
        <RichText json={summary} />
      </Typography>
    </Box>
  );

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        {imagePosition === "left" ? ImageComponent : RichTextComponent}
      </Grid>
      <Grid xs={12} md={6}>
        {imagePosition === "left" ? RichTextComponent : ImageComponent}
      </Grid>
    </Grid>
  );
}
