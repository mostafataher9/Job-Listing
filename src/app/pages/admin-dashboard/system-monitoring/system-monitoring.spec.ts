import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemMonitoring } from './system-monitoring';

describe('SystemMonitoring', () => {
  let component: SystemMonitoring;
  let fixture: ComponentFixture<SystemMonitoring>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SystemMonitoring]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SystemMonitoring);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
