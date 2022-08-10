import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiIconComponent } from './bi-icon.component';

describe('BiIconComponent', () => {
  let component: BiIconComponent;
  let fixture: ComponentFixture<BiIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BiIconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BiIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
