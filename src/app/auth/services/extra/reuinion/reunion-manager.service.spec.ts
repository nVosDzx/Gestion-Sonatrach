import { TestBed } from '@angular/core/testing';

import { ReunionManagerService } from './reunion-manager.service';

describe('ReunionManagerService', () => {
  let service: ReunionManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReunionManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
