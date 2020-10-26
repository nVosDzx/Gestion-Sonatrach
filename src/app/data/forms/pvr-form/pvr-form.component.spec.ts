import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PvrFormComponent } from './pvr-form.component';

describe('PvrFormComponent', () => {
  let component: PvrFormComponent;
  let fixture: ComponentFixture<PvrFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PvrFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PvrFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
