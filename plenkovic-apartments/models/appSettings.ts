import { ILocation } from "@m/shared";

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
