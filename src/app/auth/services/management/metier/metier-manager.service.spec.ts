import { TestBed } from '@angular/core/testing';

import { MetierManagerService } from './metier-manager.service';

describe('MetierManagerService', () => {
  let service: MetierManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MetierManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
