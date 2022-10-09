export interface IApartment {
  title: string;
}

export interface IapartmentCollection {
  apartmentCollection: {
    items: [IApartment];
  };
}
