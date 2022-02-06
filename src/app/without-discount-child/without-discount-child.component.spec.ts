import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithoutDiscountChildComponent } from './without-discount-child.component';

describe('WithoutDiscountChildComponent', () => {
  let component: WithoutDiscountChildComponent;
  let fixture: ComponentFixture<WithoutDiscountChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WithoutDiscountChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WithoutDiscountChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
