import { TestBed } from '@angular/core/testing';

import { SearchBiensService } from './search-biens.service';

describe('SearchBiensService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SearchBiensService = TestBed.get(SearchBiensService);
    expect(service).toBeTruthy();
  });
});
