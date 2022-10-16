import LocationPageComponent from "@c/Location";
import { TransportEnum } from "@e/transport";
import { ILocationPage } from "@m/locationPage";
import { ILocation } from "@m/shared";
import { getLocationPage } from "@u/contentful";
import { RichTextContent } from "contentful";

export interface LocationPageProps {
  title: string;
  sections: {
    location: ILocation;
    description: RichTextContent;
    transport: TransportEnum;
    title: string;
  }[];
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
      title: data.locationPage.title,
      sections: data.locationPage.sectionsCollection.items.map(
        ({ location, description, transport, title }) => ({
          location,
          title,
          transport: transport[0],
          description: description.json,
        })
      ),
    },
  };
}
