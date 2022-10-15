import { ILocation } from "@m/shared";
import LocationOnIcon from '@mui/icons-material/LocationOn';

interface LocationMapProps {
  location: ILocation;
}

export default function LocationMap({
  location: { lat, lon },
}: LocationMapProps) {
  return (
    <>
      {lat} - {lon}
    </>
  );
}
