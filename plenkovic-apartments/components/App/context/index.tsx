import { IChildren } from "@i/common";
import { ILocation } from "@m/common";
import { createContext, useContext } from "react";

export interface IAppContext {
  contact: {
    email: string;
    phone: string;
  };
  propertyLocation: ILocation;
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
});

export default function AppProvider({
  children,
  contact,
  propertyLocation,
}: IChildren & IAppContext) {
  return (
    <AppContext.Provider value={{ contact, propertyLocation }}>
      {children}
    </AppContext.Provider>
  );
}
