import { TestBed } from '@angular/core/testing';

import { BaieManagerService } from './baie-manager.service';

describe('BaieManagerService', () => {
  let service: BaieManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BaieManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
