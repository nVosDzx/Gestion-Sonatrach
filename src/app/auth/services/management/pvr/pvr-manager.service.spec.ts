import { TestBed } from '@angular/core/testing';

import { PvrManagerService } from './pvr-manager.service';

describe('PvrManagerService', () => {
  let service: PvrManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PvrManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
