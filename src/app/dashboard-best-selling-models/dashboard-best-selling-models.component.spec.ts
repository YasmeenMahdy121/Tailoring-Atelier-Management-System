import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardBestSellingModelsComponent } from './dashboard-best-selling-models.component';

describe('DashboardBestSellingModelsComponent', () => {
  let component: DashboardBestSellingModelsComponent;
  let fixture: ComponentFixture<DashboardBestSellingModelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardBestSellingModelsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardBestSellingModelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
