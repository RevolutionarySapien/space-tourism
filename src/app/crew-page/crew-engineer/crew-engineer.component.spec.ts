import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrewEngineerComponent } from './crew-engineer.component';

describe('CrewEngineerComponent', () => {
  let component: CrewEngineerComponent;
  let fixture: ComponentFixture<CrewEngineerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrewEngineerComponent]
    });
    fixture = TestBed.createComponent(CrewEngineerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
