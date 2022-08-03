import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardUpdateModelComponent } from './dashboard-update-model.component';

describe('DashboardUpdateModelComponent', () => {
  let component: DashboardUpdateModelComponent;
  let fixture: ComponentFixture<DashboardUpdateModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardUpdateModelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardUpdateModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
