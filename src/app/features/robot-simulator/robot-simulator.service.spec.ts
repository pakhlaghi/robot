import { TestBed, inject } from '@angular/core/testing';

import { RobotSimulatorService } from './robot-simulator.service';

describe('RobotSimulatorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RobotSimulatorService]
    });
  });

  it('should be created', inject([RobotSimulatorService], (service: RobotSimulatorService) => {
    expect(service).toBeTruthy();
  }));
});
