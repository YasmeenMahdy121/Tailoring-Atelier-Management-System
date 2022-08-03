import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardSearshModelComponent } from './dashboard-searsh-model.component';

describe('DashboardSearshModelComponent', () => {
  let component: DashboardSearshModelComponent;
  let fixture: ComponentFixture<DashboardSearshModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardSearshModelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardSearshModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
