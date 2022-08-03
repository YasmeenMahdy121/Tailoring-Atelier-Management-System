import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardPendingModelCardComponent } from './dashboard-pending-model-card.component';

describe('DashboardPendingModelCardComponent', () => {
  let component: DashboardPendingModelCardComponent;
  let fixture: ComponentFixture<DashboardPendingModelCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardPendingModelCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardPendingModelCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
