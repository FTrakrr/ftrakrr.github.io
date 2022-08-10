import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalDataDisplayComponent } from './personal-data-display.component';

describe('PersonalDataDisplayComponent', () => {
  let component: PersonalDataDisplayComponent;
  let fixture: ComponentFixture<PersonalDataDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalDataDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalDataDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
