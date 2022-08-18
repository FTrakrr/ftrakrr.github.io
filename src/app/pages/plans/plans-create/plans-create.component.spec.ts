import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlansCreatePage } from './plans-create.component';

describe('PlansCreateComponent', () => {
  let component: PlansCreatePage;
  let fixture: ComponentFixture<PlansCreatePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlansCreatePage ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlansCreatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
