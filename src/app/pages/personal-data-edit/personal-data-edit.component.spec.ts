import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalDataEditComponent } from './personal-data-edit.component';

describe('PersonalDataEditComponent', () => {
  let component: PersonalDataEditComponent;
  let fixture: ComponentFixture<PersonalDataEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalDataEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalDataEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
