import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaieFormComponent } from './baie-form.component';

describe('BaieFormComponent', () => {
  let component: BaieFormComponent;
  let fixture: ComponentFixture<BaieFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaieFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaieFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
