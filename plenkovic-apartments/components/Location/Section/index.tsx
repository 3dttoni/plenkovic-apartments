import { LocationMapProps } from "@c/Location/Map";
import RichText from "@c/RichText";
import { PositionEnum } from "@e/position";
import { TransportEnum } from "@e/transport";
import useAnimationEffect from "@h/useAnimationEffect";
import { Card, CardContent, CardHeader, Grid, Typography } from "@mui/material";
import { RichTextContent } from "contentful";
import dynamic from "next/dynamic";
import DirectionsBusRoundedIcon from "@mui/icons-material/DirectionsBusRounded";
import AirplanemodeActiveRoundedIcon from "@mui/icons-material/AirplanemodeActiveRounded";
import DirectionsCarFilledRoundedIcon from "@mui/icons-material/DirectionsCarFilledRounded";

const LocationMap = dynamic(() => import("@c/Location/Map"), { ssr: false });

export interface LocationSectionProps extends Omit<LocationMapProps, "zoom"> {
  imagePosition: PositionEnum;
  description: RichTextContent;
  title: string;
  transport: TransportEnum;
}

export default function LocaitonSection({
  description,
  location,
  imagePosition,
  title,
  transport,
}: LocationSectionProps) {
  const animationEffect = useAnimationEffect();
  let mapZoom: number;
  let TransportIcon: any;

  switch (transport) {
    case TransportEnum.BUS: {
      TransportIcon = DirectionsBusRoundedIcon;
      mapZoom = 17;
      break;
    }
    case TransportEnum.PLANE: {
      TransportIcon = AirplanemodeActiveRoundedIcon;
      mapZoom = 10;
      break;
    }
    case TransportEnum.CAR: {
      TransportIcon = DirectionsCarFilledRoundedIcon;
      mapZoom = 18;
      break;
    }
    default: {
      mapZoom = 14;
      TransportIcon = null;
    }
  }

  return (
    <Card elevation={5} data-aos={`${animationEffect}-${imagePosition}`}>
      <CardHeader title={<TransportIcon />} />
      <CardContent>
        <Grid
          mb={6}
          container
          flexDirection={
            imagePosition === PositionEnum.LEFT ? "row" : "row-reverse"
          }
          spacing={4}
        >
          <Grid item xs={12} md={6}>
            <Typography variant="h5" component="h2">
              {title}
            </Typography>
            <RichText json={description} />
          </Grid>
          <Grid item xs={12} md={6}>
            <LocationMap location={location} title={title} zoom={mapZoom} />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
