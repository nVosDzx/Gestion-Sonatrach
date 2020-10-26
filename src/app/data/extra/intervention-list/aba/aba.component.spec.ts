import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ABAComponent } from './aba.component';

describe('ABAComponent', () => {
  let component: ABAComponent;
  let fixture: ComponentFixture<ABAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ABAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ABAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
