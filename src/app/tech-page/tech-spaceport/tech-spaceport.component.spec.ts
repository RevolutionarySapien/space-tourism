import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechSpaceportComponent } from './tech-spaceport.component';

describe('TechSpaceportComponent', () => {
  let component: TechSpaceportComponent;
  let fixture: ComponentFixture<TechSpaceportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TechSpaceportComponent]
    });
    fixture = TestBed.createComponent(TechSpaceportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
