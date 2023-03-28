import { Injectable } from '@angular/core';
import { Auth, signInWithEmailAndPassword, signOut } from '@angular/fire/auth';
import { IloginData } from '../interfaces/auth.interface';

@Injectable({
  providedIn: 'root',
})

export class AuthService {
  constructor(private auth: Auth) {}

  login(payload: IloginData) {
    return signInWithEmailAndPassword(
      this.auth,
      payload.email,
      payload.password
    );
  }

  logout() {
    return signOut(this.auth);
  }
}
