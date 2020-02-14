import { TestBed } from '@angular/core/testing';

import { LocalstorageserviceService } from './localstorageservice.service';

describe('LocalstorageserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LocalstorageserviceService = TestBed.get(LocalstorageserviceService);
    expect(service).toBeTruthy();
  });
});
