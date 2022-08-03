import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardPendingModelsComponent } from './dashboard-pending-models.component';

describe('DashboardPendingModelsComponent', () => {
  let component: DashboardPendingModelsComponent;
  let fixture: ComponentFixture<DashboardPendingModelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardPendingModelsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardPendingModelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
