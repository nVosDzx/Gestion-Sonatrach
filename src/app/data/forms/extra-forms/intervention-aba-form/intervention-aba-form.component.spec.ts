import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterventionAbaFormComponent } from './intervention-aba-form.component';

describe('InterventionAbaFormComponent', () => {
  let component: InterventionAbaFormComponent;
  let fixture: ComponentFixture<InterventionAbaFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterventionAbaFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterventionAbaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
