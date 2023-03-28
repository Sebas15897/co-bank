import { TestBed } from '@angular/core/testing';

import { AuthPrivateGuardGuard } from './auth-private-guard.guard';

describe('AuthPrivateGuardGuard', () => {
  let guard: AuthPrivateGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthPrivateGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
