import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechVehicleComponent } from './tech-vehicle.component';

describe('TechVehicleComponent', () => {
  let component: TechVehicleComponent;
  let fixture: ComponentFixture<TechVehicleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TechVehicleComponent]
    });
    fixture = TestBed.createComponent(TechVehicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
