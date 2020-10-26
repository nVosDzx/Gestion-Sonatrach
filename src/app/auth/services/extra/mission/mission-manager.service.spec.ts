import { TestBed } from '@angular/core/testing';

import { MissionManagerService } from './mission-manager.service';

describe('MissionManagerService', () => {
  let service: MissionManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MissionManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
