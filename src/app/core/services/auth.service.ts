import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppSettings } from '../app.settings';
import { ILoginResponse } from '../interfaces/response.interface';

@Injectable({
  providedIn: 'root',
})

export class AuthService {
  constructor(
    private httpClient: HttpClient,
    private appSettins: AppSettings,
  ) {}

  login() {
    const url = this.appSettins.auth.urls.login;
    return this.httpClient.get<ILoginResponse>(url);
  }

  logout() {}

}
