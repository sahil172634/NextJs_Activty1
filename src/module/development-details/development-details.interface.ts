export interface IDevelopmentDetails {
  totalProperties: number;
  classification: string;
  priceSearch: string;
  title: string;
  bedrooms: string;
  bathrooms: string;
  carSpaces: string;
  address: IAddress;
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
}
interface IDisplaySuite {
  address: {
    thoroughfareNumber: string;
  };
}
interface IDescription {
  textProfile: string;
}
