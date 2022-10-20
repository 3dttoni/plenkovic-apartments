import { AppContext } from "@c/App/context";
import { ILocation } from "@m/shared";
import { LatLngExpression } from "leaflet";
import { useContext } from "react";
import { MapContainer, Marker, TileLayer, Popup } from "react-leaflet";

export interface LocationMapProps {
  location: ILocation;
  title: string;
  zoom: number;
}

export default function LocationMap({
  location: { lat, lon },
  title,
  zoom,
}: LocationMapProps) {
  const { propertyLocation } = useContext(AppContext);
  const position: LatLngExpression = [lat, lon];

  return (
    <MapContainer center={position} zoom={zoom}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[propertyLocation.lat, propertyLocation.lon]}>
        <Popup>Plenković apartments</Popup>
      </Marker>
      <Marker position={position}>
        <Popup>{title}</Popup>
      </Marker>
    </MapContainer>
  );
}
