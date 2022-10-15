import { ILocation } from "@m/shared";
import { MapContainer, Marker, TileLayer, Popup } from "react-leaflet";

interface LocationMapProps {
  location: ILocation;
}

export default function LocationMap({
  location: { lat, lon },
}: LocationMapProps) {
  return (
    <MapContainer center={[lat, lon]} zoom={16}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[lat, lon]}>
        <Popup>Plenković apartments</Popup>
      </Marker>
    </MapContainer>
  );
}
