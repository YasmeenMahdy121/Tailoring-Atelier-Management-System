import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardAllModelsWithCrudOPerationComponent } from './dashboard-all-models-with-crud-operation.component';

describe('DashboardAllModelsWithCrudOPerationComponent', () => {
  let component: DashboardAllModelsWithCrudOPerationComponent;
  let fixture: ComponentFixture<DashboardAllModelsWithCrudOPerationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardAllModelsWithCrudOPerationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardAllModelsWithCrudOPerationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
