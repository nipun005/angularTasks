import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcommercePageComponent } from './ecommerce-page.component';

describe('EcommercePageComponent', () => {
  let component: EcommercePageComponent;
  let fixture: ComponentFixture<EcommercePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EcommercePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EcommercePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
