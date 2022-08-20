import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardSearchUsersComponent } from './dashboard-search-users.component';

describe('DashboardSearchUsersComponent', () => {
  let component: DashboardSearchUsersComponent;
  let fixture: ComponentFixture<DashboardSearchUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardSearchUsersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardSearchUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
