export interface IUser {
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

export interface IUserAdd {
  name: string;
  type: string;
  status: string;
}
