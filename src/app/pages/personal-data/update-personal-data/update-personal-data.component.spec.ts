import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePersonalDataComponent } from './update-personal-data.component';

describe('UpdatePersonalDataComponent', () => {
  let component: UpdatePersonalDataComponent;
  let fixture: ComponentFixture<UpdatePersonalDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatePersonalDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatePersonalDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
