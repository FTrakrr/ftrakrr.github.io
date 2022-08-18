import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlansEditComponent } from './plans-edit.component';

describe('PlansEditComponent', () => {
  let component: PlansEditComponent;
  let fixture: ComponentFixture<PlansEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlansEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlansEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
