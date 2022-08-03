import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardModelCardWithCrudOPerationComponent } from './dashboard-model-card-with-crud-operation.component';

describe('DashboardModelCardWithCrudOPerationComponent', () => {
  let component: DashboardModelCardWithCrudOPerationComponent;
  let fixture: ComponentFixture<DashboardModelCardWithCrudOPerationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardModelCardWithCrudOPerationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardModelCardWithCrudOPerationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
