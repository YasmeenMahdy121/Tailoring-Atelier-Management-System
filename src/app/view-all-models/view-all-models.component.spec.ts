import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllModelsComponent } from './view-all-models.component';

describe('ViewAllModelsComponent', () => {
  let component: ViewAllModelsComponent;
  let fixture: ComponentFixture<ViewAllModelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAllModelsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewAllModelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
