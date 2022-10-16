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

export interface LocationSectionProps extends LocationMapProps {
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

  return (
    <Card elevation={5} data-aos={`${animationEffect}-${imagePosition}`}>
      <CardHeader
        title={
          <>
            {transport === TransportEnum.BUS && <DirectionsBusRoundedIcon />}
            {transport === TransportEnum.PLANE && (
              <AirplanemodeActiveRoundedIcon />
            )}
            {transport === TransportEnum.CAR && (
              <DirectionsCarFilledRoundedIcon />
            )}
          </>
        }
      />
      <CardContent>
        <Grid
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
            <LocationMap location={location} />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
