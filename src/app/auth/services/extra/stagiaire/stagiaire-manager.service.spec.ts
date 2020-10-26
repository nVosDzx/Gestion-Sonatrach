import { TestBed } from '@angular/core/testing';

import { StagiaireManagerService } from './stagiaire-manager.service';

describe('StagiaireManagerService', () => {
  let service: StagiaireManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StagiaireManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
