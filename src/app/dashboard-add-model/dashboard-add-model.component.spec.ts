import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardAddModelComponent } from './dashboard-add-model.component';

describe('DashboardAddModelComponent', () => {
  let component: DashboardAddModelComponent;
  let fixture: ComponentFixture<DashboardAddModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardAddModelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardAddModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
