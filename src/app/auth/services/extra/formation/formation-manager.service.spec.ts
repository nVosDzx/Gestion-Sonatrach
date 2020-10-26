import { TestBed } from '@angular/core/testing';

import { FormationManagerService } from './formation-manager.service';

describe('FormationManagerService', () => {
  let service: FormationManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormationManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
