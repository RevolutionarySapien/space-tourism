import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrewSpecialistComponent } from './crew-specialist.component';

describe('CrewSpecialistComponent', () => {
  let component: CrewSpecialistComponent;
  let fixture: ComponentFixture<CrewSpecialistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrewSpecialistComponent]
    });
    fixture = TestBed.createComponent(CrewSpecialistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
