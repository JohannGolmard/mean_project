import { TestBed } from '@angular/core/testing';

import { GuardUsersService } from './guard-users.service';

describe('GuardUsersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GuardUsersService = TestBed.get(GuardUsersService);
    expect(service).toBeTruthy();
  });
});
