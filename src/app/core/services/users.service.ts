import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppSettings } from '../app.settings';
import { ILoginResponse } from '../interfaces/response.interface';
import { IUsers, IUserSearch } from '../interfaces/users.interface';

@Injectable({
  providedIn: 'root',
})

export class UsersService {
  constructor(
    private httpClient: HttpClient,
    private appSettins: AppSettings
  ) {}

  getUsers(page: number) {
    const url = `${this.appSettins.users.urls.getUsers}?page=${page}`;
    return this.httpClient.get<IUsers>(url);
  }

  getUserByFilter(data: IUserSearch) {
    const url = `${this.appSettins.users.urls.getUsers}?name=${data.name}&type=${data.type}`;
    return this.httpClient.get<IUsers>(url);
  }
}
