import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransparentButtonComponent } from './transparent-button.component';

describe('TransparentButtonComponent', () => {
  let component: TransparentButtonComponent;
  let fixture: ComponentFixture<TransparentButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransparentButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransparentButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
