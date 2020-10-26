import { TestBed } from '@angular/core/testing';

import { BackupManagerService } from './backup-manager.service';

describe('BackupManagerService', () => {
  let service: BackupManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BackupManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
