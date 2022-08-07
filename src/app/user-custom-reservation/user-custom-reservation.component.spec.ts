import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCustomReservationComponent } from './user-custom-reservation.component';

describe('UserCustomReservationComponent', () => {
  let component: UserCustomReservationComponent;
  let fixture: ComponentFixture<UserCustomReservationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserCustomReservationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserCustomReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
