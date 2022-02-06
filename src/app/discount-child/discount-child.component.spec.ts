import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscountChildComponent } from './discount-child.component';

describe('DiscountChildComponent', () => {
  let component: DiscountChildComponent;
  let fixture: ComponentFixture<DiscountChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiscountChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscountChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
