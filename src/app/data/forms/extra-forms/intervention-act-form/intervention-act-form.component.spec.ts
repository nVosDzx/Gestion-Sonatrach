import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterventionActFormComponent } from './intervention-act-form.component';

describe('InterventionActFormComponent', () => {
  let component: InterventionActFormComponent;
  let fixture: ComponentFixture<InterventionActFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterventionActFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterventionActFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
