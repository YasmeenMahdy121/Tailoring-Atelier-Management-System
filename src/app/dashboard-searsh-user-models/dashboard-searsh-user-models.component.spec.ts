import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardSearshUserModelsComponent } from './dashboard-searsh-user-models.component';

describe('DashboardSearshUserModelsComponent', () => {
  let component: DashboardSearshUserModelsComponent;
  let fixture: ComponentFixture<DashboardSearshUserModelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardSearshUserModelsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardSearshUserModelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
