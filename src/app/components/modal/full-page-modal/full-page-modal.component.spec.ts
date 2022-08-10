import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullPageModalComponent } from './full-page-modal.component';

describe('FullPageModalComponent', () => {
  let component: FullPageModalComponent;
  let fixture: ComponentFixture<FullPageModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FullPageModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FullPageModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
