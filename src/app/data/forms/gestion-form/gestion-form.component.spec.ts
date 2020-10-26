import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionFormComponent } from './gestion-form.component';

describe('GestionFormComponent', () => {
  let component: GestionFormComponent;
  let fixture: ComponentFixture<GestionFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
