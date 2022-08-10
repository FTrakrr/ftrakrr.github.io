import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalDataBirthdayComponent } from './personal-data-birthday.component';

describe('PersonalDataBirthdayComponent', () => {
  let component: PersonalDataBirthdayComponent;
  let fixture: ComponentFixture<PersonalDataBirthdayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalDataBirthdayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalDataBirthdayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
