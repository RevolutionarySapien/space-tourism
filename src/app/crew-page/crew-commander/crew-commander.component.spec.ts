import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrewCommanderComponent } from './crew-commander.component';

describe('CrewCommanderComponent', () => {
  let component: CrewCommanderComponent;
  let fixture: ComponentFixture<CrewCommanderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrewCommanderComponent]
    });
    fixture = TestBed.createComponent(CrewCommanderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
