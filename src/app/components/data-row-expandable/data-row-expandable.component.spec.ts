import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataRowExpandableComponent } from './data-row-expandable.component';

describe('DataRowExpandableComponent', () => {
  let component: DataRowExpandableComponent;
  let fixture: ComponentFixture<DataRowExpandableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataRowExpandableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataRowExpandableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
