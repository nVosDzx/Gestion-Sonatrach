import { TestBed } from '@angular/core/testing';

import { CalculeManagerService } from './calcule-manager.service';

describe('CalculeManagerService', () => {
  let service: CalculeManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculeManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
