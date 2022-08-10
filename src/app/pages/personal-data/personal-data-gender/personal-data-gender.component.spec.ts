import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalDataGenderComponent } from './personal-data-gender.component';

describe('PersonalDataGenderComponent', () => {
  let component: PersonalDataGenderComponent;
  let fixture: ComponentFixture<PersonalDataGenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalDataGenderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalDataGenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
