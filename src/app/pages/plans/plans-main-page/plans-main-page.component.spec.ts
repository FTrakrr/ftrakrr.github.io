import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlansMainPageComponent } from './plans-main-page.component';

describe('PlansMainPageComponent', () => {
  let component: PlansMainPageComponent;
  let fixture: ComponentFixture<PlansMainPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlansMainPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlansMainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
