import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Auth, signInWithEmailAndPassword } from '@angular/fire/auth';
import { AppSettings } from '../app.settings';
import { IloginData } from '../interfaces/auth.interface';
import { ILoginResponse } from '../interfaces/response.interface';

@Injectable({
  providedIn: 'root',
})

export class AuthService {
  constructor(
    private httpClient: HttpClient,
    private appSettins: AppSettings,
    private auth: Auth,
  ) {}

  login(payload: IloginData) {
    return signInWithEmailAndPassword(this.auth, payload.email, payload.password);
  }

  logout() {}

}
