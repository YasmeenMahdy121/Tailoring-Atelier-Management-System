import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardDeleteModelComponent } from './dashboard-delete-model.component';

describe('DashboardDeleteModelComponent', () => {
  let component: DashboardDeleteModelComponent;
  let fixture: ComponentFixture<DashboardDeleteModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardDeleteModelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardDeleteModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
