import { TestBed } from '@angular/core/testing';

import { InseranceService } from './inserance.service';

describe('InseranceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InseranceService = TestBed.get(InseranceService);
    expect(service).toBeTruthy();
  });
});
