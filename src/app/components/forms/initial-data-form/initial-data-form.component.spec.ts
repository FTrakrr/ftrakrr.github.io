import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InitialDataFormComponent } from './initial-data-form.component';

describe('InitialDataFormComponent', () => {
  let component: InitialDataFormComponent;
  let fixture: ComponentFixture<InitialDataFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InitialDataFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InitialDataFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
