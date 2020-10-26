import { TestBed } from '@angular/core/testing';

import { ToDoManagerService } from './to-do-manager.service';

describe('ToDoManagerService', () => {
  let service: ToDoManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToDoManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
