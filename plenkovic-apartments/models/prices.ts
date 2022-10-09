import { IAsset } from "@m/common";
import { RichTextContent } from "contentful";

export interface IPrices {
  apartmentCollection: {
    items: [
      {
        pricesSection: { json: RichTextContent };
        stars: number;
        banner: IAsset;
        title: string;
      }
    ];
  };
}
