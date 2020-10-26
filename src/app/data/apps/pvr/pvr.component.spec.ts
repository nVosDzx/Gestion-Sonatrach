import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PvrComponent } from './pvr.component';

describe('PvrComponent', () => {
  let component: PvrComponent;
  let fixture: ComponentFixture<PvrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PvrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PvrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
