import RichText from "@c/RichText";
import { PositionEnum } from "@e/position";
import { IAsset } from "@m/shared";
import { Box, Grid, Typography } from "@mui/material";
import { RichTextContent } from "contentful";
import Image from "next/image";

export interface HomeApartmentProps {
  summary: RichTextContent;
  banner: IAsset;
  imagePosition: PositionEnum;
}
export default function HomeApartment({
  summary,
  banner,
  imagePosition,
}: HomeApartmentProps) {
  return (
    <Grid
      container
      spacing={{ md: 2 }}
      direction={imagePosition === PositionEnum.LEFT ? "row" : "row-reverse"}
    >
      <Grid item xs={12} md={6}>
        <Box sx={{ p: 2 }}>
          <Image
            src={banner.url}
            alt={banner.title}
            height={1330}
            width={1550}
          />
        </Box>
      </Grid>
      <Grid xs={12} md={6}>
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
      </Grid>
    </Grid>
  );
}
