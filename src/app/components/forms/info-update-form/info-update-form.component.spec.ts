import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoUpdateFormComponent } from './info-update-form.component';

describe('InfoUpdateFormComponent', () => {
  let component: InfoUpdateFormComponent;
  let fixture: ComponentFixture<InfoUpdateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoUpdateFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoUpdateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
