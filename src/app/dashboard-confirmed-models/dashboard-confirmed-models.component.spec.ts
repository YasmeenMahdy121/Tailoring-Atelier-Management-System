import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardConfirmedModelsComponent } from './dashboard-confirmed-models.component';

describe('DashboardConfirmedModelsComponent', () => {
  let component: DashboardConfirmedModelsComponent;
  let fixture: ComponentFixture<DashboardConfirmedModelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardConfirmedModelsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardConfirmedModelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
