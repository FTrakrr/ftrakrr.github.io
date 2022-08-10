import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalDataHeightComponent } from './personal-data-height.component';

describe('PersonalDataHeightComponent', () => {
  let component: PersonalDataHeightComponent;
  let fixture: ComponentFixture<PersonalDataHeightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalDataHeightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalDataHeightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
