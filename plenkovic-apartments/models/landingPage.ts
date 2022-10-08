import { IAsset } from "@m/common";
import { RichTextContent } from "contentful";

export interface ILandingPage {
  landingPage: {
    headingSlidesCollection: {
      items: IAsset[];
    };
    headingText: {
      json: RichTextContent;
    };
    introText: {
      json: RichTextContent;
    };
    topApartmentsCollection: {
      items: [
        {
          summary: { json: RichTextContent };
          banner: IAsset;
        }
      ];
    };
  };
}
