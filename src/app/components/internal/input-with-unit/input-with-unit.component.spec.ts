import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputWithUnitComponent } from './input-with-unit.component';

describe('InputWithUnitComponent', () => {
  let component: InputWithUnitComponent;
  let fixture: ComponentFixture<InputWithUnitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputWithUnitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputWithUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
