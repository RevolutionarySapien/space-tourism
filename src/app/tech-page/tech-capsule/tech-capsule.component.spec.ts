import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechCapsuleComponent } from './tech-capsule.component';

describe('TechCapsuleComponent', () => {
  let component: TechCapsuleComponent;
  let fixture: ComponentFixture<TechCapsuleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TechCapsuleComponent]
    });
    fixture = TestBed.createComponent(TechCapsuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
