import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalDataWeightComponent } from './personal-data-weight.component';

describe('PersonalDataWeightComponent', () => {
  let component: PersonalDataWeightComponent;
  let fixture: ComponentFixture<PersonalDataWeightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalDataWeightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalDataWeightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
