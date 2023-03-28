import { TestBed } from '@angular/core/testing';

import { AuthPublicGuardGuard } from './auth-public-guard.guard';

describe('AuthPublicGuardGuard', () => {
  let guard: AuthPublicGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthPublicGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
