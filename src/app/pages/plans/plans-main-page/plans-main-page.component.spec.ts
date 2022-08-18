import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlansMainPagePage } from './plans-main-page.component';

describe('PlansMainPageComponent', () => {
  let component: PlansMainPagePage;
  let fixture: ComponentFixture<PlansMainPagePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlansMainPagePage ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlansMainPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
