import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculeFormComponent } from './calcule-form.component';

describe('CalculeFormComponent', () => {
  let component: CalculeFormComponent;
  let fixture: ComponentFixture<CalculeFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalculeFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
