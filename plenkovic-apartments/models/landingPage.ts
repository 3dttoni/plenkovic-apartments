import { IAsset } from "@m/common";
import { RichTextContent } from "contentful";

export interface ILandingPage {
  landingPage: {
    headingSlidesCollection: {
      items: IAsset[];
      total: number;
    };
    introText: {
      json: RichTextContent
    };
  };
}
