import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { AuthState } from '../../state/auth/auth.state';

@Injectable({
  providedIn: 'root',
})
export class AuthPrivateGuard implements CanActivate {
  constructor(private router: Router, private store: Store) {}

  canActivate() {
    const isAuthenticated: boolean = this.store.selectSnapshot(
      AuthState.isAuthenticated
    );
    if (isAuthenticated) {
      this.router.navigate(['public/login']);
    }
    return !isAuthenticated ? true : false;
  }
}
