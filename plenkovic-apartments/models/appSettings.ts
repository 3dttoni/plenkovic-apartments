import { ILocation } from "@m/common";

export interface IAppSettings {
  appSettingsCollection: {
    items: [
      {
        contactPhone: string;
        email: string;
        propertyLocation: ILocation;
      }
    ];
  };
}
