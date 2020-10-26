import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ASComponent } from './as.component';

describe('ASComponent', () => {
  let component: ASComponent;
  let fixture: ComponentFixture<ASComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ASComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ASComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
