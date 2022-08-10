import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalDataMainPageComponent } from './personal-data-main-page.component';

describe('PersonalDataMainPageComponent', () => {
  let component: PersonalDataMainPageComponent;
  let fixture: ComponentFixture<PersonalDataMainPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalDataMainPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalDataMainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
