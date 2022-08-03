import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardBestSellingModelCardComponent } from './dashboard-best-selling-model-card.component';

describe('DashboardBestSellingModelCardComponent', () => {
  let component: DashboardBestSellingModelCardComponent;
  let fixture: ComponentFixture<DashboardBestSellingModelCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardBestSellingModelCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardBestSellingModelCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
