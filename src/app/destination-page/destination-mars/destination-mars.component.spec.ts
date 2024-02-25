import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DestinationMarsComponent } from './destination-mars.component';

describe('DestinationMarsComponent', () => {
  let component: DestinationMarsComponent;
  let fixture: ComponentFixture<DestinationMarsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DestinationMarsComponent]
    });
    fixture = TestBed.createComponent(DestinationMarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
