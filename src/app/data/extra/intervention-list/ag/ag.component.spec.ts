import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AGComponent } from './ag.component';

describe('AGComponent', () => {
  let component: AGComponent;
  let fixture: ComponentFixture<AGComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AGComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
