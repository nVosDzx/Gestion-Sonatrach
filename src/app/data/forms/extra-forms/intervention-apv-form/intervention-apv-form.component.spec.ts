import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterventionApvFormComponent } from './intervention-apv-form.component';

describe('InterventionApvFormComponent', () => {
  let component: InterventionApvFormComponent;
  let fixture: ComponentFixture<InterventionApvFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterventionApvFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterventionApvFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
