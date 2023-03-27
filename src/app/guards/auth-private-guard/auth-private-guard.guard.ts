import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Store } from '@ngxs/store';

@Injectable({
  providedIn: 'root',
})

export class AuthPrivateGuard implements CanActivate {
  constructor(private router: Router, private store: Store) {}

  canActivate() {
    return true;
  }
}
