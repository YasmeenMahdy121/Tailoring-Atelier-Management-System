import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroPageNavbarComponent } from './intro-page-navbar.component';

describe('IntroPageNavbarComponent', () => {
  let component: IntroPageNavbarComponent;
  let fixture: ComponentFixture<IntroPageNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntroPageNavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntroPageNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
