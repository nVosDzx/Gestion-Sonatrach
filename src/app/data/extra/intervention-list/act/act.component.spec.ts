import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ACTComponent } from './act.component';

describe('ACTComponent', () => {
  let component: ACTComponent;
  let fixture: ComponentFixture<ACTComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ACTComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ACTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
