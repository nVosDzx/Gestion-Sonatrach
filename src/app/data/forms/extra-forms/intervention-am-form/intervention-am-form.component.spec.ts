import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterventionAMFormComponent } from './intervention-am-form.component';

describe('InterventionAMFormComponent', () => {
  let component: InterventionAMFormComponent;
  let fixture: ComponentFixture<InterventionAMFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterventionAMFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterventionAMFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
