import { TestBed } from '@angular/core/testing';

import { AuthPublicGuard } from './auth-public-guard.guard';

describe('AuthPublicGuardGuard', () => {
  let guard: AuthPublicGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthPublicGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
