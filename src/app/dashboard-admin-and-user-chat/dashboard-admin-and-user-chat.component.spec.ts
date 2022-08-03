import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardAdminAndUserChatComponent } from './dashboard-admin-and-user-chat.component';

describe('DashboardAdminAndUserChatComponent', () => {
  let component: DashboardAdminAndUserChatComponent;
  let fixture: ComponentFixture<DashboardAdminAndUserChatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardAdminAndUserChatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardAdminAndUserChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
