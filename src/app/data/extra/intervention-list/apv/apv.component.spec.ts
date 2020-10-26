import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { APVComponent } from './apv.component';

describe('APVComponent', () => {
  let component: APVComponent;
  let fixture: ComponentFixture<APVComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ APVComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(APVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
