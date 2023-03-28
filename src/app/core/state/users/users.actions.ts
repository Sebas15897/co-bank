import { IUserSearch } from '../../interfaces/users.interface';

export class GetUsersAction {
  static readonly type = '[Users] Get All';
  constructor(public payload: number | null) {}
}

export class GetUsersByFilterAction {
  static readonly type = '[Users] Get By Filter';
  constructor(public payload: IUserSearch) {}
}
