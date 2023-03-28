export interface ILoginResponse {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: ILocation;
  location: ILocation;
  image: string;
  url: string;
  created: Date;
}

export interface ILocation {
  name: string;
  url: string;
}
