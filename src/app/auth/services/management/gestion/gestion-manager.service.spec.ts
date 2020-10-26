import { TestBed } from '@angular/core/testing';

import { GestionManagerService } from './gestion-manager.service';

describe('GestionManagerService', () => {
  let service: GestionManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GestionManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
