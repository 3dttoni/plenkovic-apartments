import { IAsset } from "@m/common";

export interface ILandingPage {
  landingPage: {
    headingSlidesCollection: {
      items: IAsset[];
      total: number;
    };
  };
}
