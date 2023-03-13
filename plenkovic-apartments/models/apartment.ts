import { IReviews } from "@m/shared";
import { IAsset } from "@m/shared";
import { RichTextContent } from "contentful";

export interface IApartment {
  title: string;
  description: { json: RichTextContent };
  stars: number;
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
