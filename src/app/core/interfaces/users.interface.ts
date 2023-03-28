export interface IUsers {
  info: IInfo;
  results: IUserResult[];
}

export interface IInfo {
  count: number;
  pages: number;
  next: string;
  prev: string;
}

export interface IUserResult {
  id?: number;
  name?: string;
  status?: string;
  species?: string;
  type?: string;
  gender?: string;
  origin?: ILocation;
  location?: ILocation;
  image?: string;
  episode?: string[];
  url?: string;
  created?: Date;
}

export interface ILocation {
  name: string;
  url: string;
}

export interface IUserSearch {
  name: string;
  type: string;
}
