import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardChatSidebarComponent } from './dashboard-chat-sidebar.component';

describe('DashboardChatSidebarComponent', () => {
  let component: DashboardChatSidebarComponent;
  let fixture: ComponentFixture<DashboardChatSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardChatSidebarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardChatSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
