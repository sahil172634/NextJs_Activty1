export interface IDevelopmentDetails {
  totalProperties: number;
  classification: string;
  priceSearch: string;
  title: string;
  bedrooms: string;
  bathrooms: string;
  carSpaces: string;
  address: IAddress;
  image: string;
  properties: IProperties[];
  displaySuite: IDisplaySuite;
  description: IDescription;
}
export interface IProperties {
  title: string;
  priceDisplay: string;
  bedrooms: string;
  bathrooms: string;
  carSpaces: string;
  discr: string;
  files: {
    thumbnail: {
      url: string;
    }[];
  };
}
interface IAddress {
  postalCode: string;
  shortenState: string;
  state: string;
  area: string;
  thoroughfare: string;
  thoroughfareNumber: string;
  country: string;
  latitude: string;
  longitude: string;
}
interface IDisplaySuite {
  address: {
    thoroughfareNumber: string;
  };
}
interface IDescription {
  textProfile: string;
}
export interface ImetaConst {
  content: string;
  name?: string;
  property?: string;
  httpEquiv?: string;
}
