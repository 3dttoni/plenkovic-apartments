import LocationPageComponent from "@c/Location";
import { ILocationPage } from "@m/locationPage";
import { ILocation } from "@m/shared";
import { getLocationPage } from "@u/contentful";
import { RichTextContent } from "contentful";

export interface LocationPageProps {
  location: ILocation;
  description: RichTextContent;
}

export default function LocationPage(props: LocationPageProps) {
  return <LocationPageComponent {...props} />;
}

export async function getStaticProps(): Promise<{
  props: LocationPageProps;
}> {
  const data: ILocationPage = await getLocationPage();

  return {
    props: {
      location: data.locationPage.location,
      description: data.locationPage.description.json,
    },
  };
}
