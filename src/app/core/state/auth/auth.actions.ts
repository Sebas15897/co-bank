import { IloginData } from "../../interfaces/auth.interface";

export class LoginAction {
  static readonly type = '[Auth] Login';
  constructor(public payload: IloginData) {}
}

export class LogoutAction {
  static readonly type = '[Auth] Logout';
  constructor() {}
}
