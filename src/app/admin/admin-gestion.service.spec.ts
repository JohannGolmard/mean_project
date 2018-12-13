import { TestBed } from '@angular/core/testing';

import { AdminGestionService } from './admin-gestion.service';

describe('AdminGestionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdminGestionService = TestBed.get(AdminGestionService);
    expect(service).toBeTruthy();
  });
});
