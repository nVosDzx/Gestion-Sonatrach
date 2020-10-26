import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterventionAgFormComponent } from './intervention-ag-form.component';

describe('InterventionAgFormComponent', () => {
  let component: InterventionAgFormComponent;
  let fixture: ComponentFixture<InterventionAgFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterventionAgFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterventionAgFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
