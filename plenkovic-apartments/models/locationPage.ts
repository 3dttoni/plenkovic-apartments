import { TransportEnum } from "@e/transport";
import { ILocation } from "@m/shared";
import { RichTextContent } from "contentful";

export interface ILocationPage {
  locationPage: {
    title: string;
    sectionsCollection: {
      items: {
        description: { json: RichTextContent };
        location: ILocation;
        transport: TransportEnum[];
        title: string;
      }[];
    };
  };
}
