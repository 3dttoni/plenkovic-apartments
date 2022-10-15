interface IAppRoutes {
  [key: string]: {
    path: string;
    title: string;
  };
}
export const appRoutes: IAppRoutes = {
  home: {
    path: "/",
    title: "Home",
  },
  apartments: {
    path: "/apartments",
    title: "Apartments",
  },
  prices: {
    path: "/prices",
    title: "Prices",
  },
  location: {
    path: "/location",
    title: 'Location'
  }
};
