import { IReviews } from "@m/shared";
import { IAsset, ILocation } from "@m/shared";
import { RichTextContent } from "contentful";

export interface IApartment {
  title: string;
  description: { json: RichTextContent };
  stars: number;
  location: ILocation;
  headerImage: IAsset;
  pricesSection: { json: RichTextContent };
  reviewsCollection: { items: IReviews[] };
  pros: { json: RichTextContent };
  cons: { json: RichTextContent };
  galleryCollection: { items: IAsset[] };
}

export interface IApartmentCollection {
  apartmentCollection: {
    items: [IApartment];
  };
}
