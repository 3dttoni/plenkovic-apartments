import { IChildren } from "@i/common";
import { ILocation } from "@m/shared";
import { createContext, useContext } from "react";

export interface IAppContext {
  contact: {
    email: string;
    phone: string;
  };
  propertyLocation: ILocation;
  pathname: string;
}

export const AppContext = createContext<IAppContext>({
  contact: {
    email: "",
    phone: "",
  },
  propertyLocation: {
    lat: 0,
    lon: 0,
  },
  pathname: "",
});

export default function AppProvider({
  children,
  contact,
  propertyLocation,
  pathname,
}: IChildren & IAppContext) {
  return (
    <AppContext.Provider value={{ contact, propertyLocation, pathname }}>
      {children}
    </AppContext.Provider>
  );
}
