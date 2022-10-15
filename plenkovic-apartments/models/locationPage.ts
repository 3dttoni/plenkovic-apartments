import { ILocation } from "@m/shared";
import { RichTextContent } from "contentful";

export interface ILocationPage {
  locationPage: {
    description: { json: RichTextContent };
    location: ILocation;
  };
}
