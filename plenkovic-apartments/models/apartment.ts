export interface IApartment {
  title: string;
}

export interface IApartmentsCollection {
  apartmentCollection: {
    items: [IApartment];
  };
}
