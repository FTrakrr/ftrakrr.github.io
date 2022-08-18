import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlansEditPage } from './plans-edit.component';

describe('PlansEditComponent', () => {
  let component: PlansEditPage;
  let fixture: ComponentFixture<PlansEditPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlansEditPage ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlansEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
