import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DestinationMoonComponent } from './destination-moon.component';

describe('DestinationMoonComponent', () => {
  let component: DestinationMoonComponent;
  let fixture: ComponentFixture<DestinationMoonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DestinationMoonComponent]
    });
    fixture = TestBed.createComponent(DestinationMoonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
