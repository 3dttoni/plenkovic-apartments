export interface IAsset {
  title: string;
  url: string;
}

export interface ILocation {
  lat: number;
  lon: number;
}

export interface IReviews {
  rate: number;
  reviewDate: Date;
  review: string;
  personName: string;
  personPhoto: IAsset;
}
