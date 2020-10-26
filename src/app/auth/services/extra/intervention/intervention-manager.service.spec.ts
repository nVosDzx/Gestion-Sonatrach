import { TestBed } from '@angular/core/testing';

import { InterventionManagerService } from './intervention-manager.service';

describe('InterventionManagerService', () => {
  let service: InterventionManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InterventionManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
