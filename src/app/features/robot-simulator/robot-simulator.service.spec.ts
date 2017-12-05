import { Robot } from './../../shared/model/robot';
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

  it('move north - safe', inject([RobotSimulatorService], (service: RobotSimulatorService) => {
    const toBe = [
      new Robot(1, 1, 0, 'move'),
      new Robot(1, 2, 0, 'move'),
      new Robot(1, 3, 0, 'move')
    ];
    let idx = 0;
    service.moveSeq('place 1,1,north\nmove\nmove').subscribe((position: Robot) => {
      expect(position.x).toBe(toBe[idx].x);
      expect(position.y).toBe(toBe[idx].y);
      expect(position.direction).toBe(toBe[idx].direction);
      idx++;
    });
  }));

  it('move north - not safe', inject([RobotSimulatorService], (service: RobotSimulatorService) => {
    const toBe = [
      new Robot(2, 3, 0, 'place'),
      new Robot(2, 4, 0, 'move'),
      new Robot(2, 4, 0, 'unsafe')
    ];
    let idx = 0;
    service.moveSeq('place 2,3,north\nmove\nmove').subscribe((position: Robot) => {
      expect(position.x).toBe(toBe[idx].x);
      expect(position.y).toBe(toBe[idx].y);
      expect(position.direction).toBe(toBe[idx].direction);
      expect(position.status).toBe(toBe[idx].status);
      idx++;
    });
  }));

  it('move east - safe', inject([RobotSimulatorService], (service: RobotSimulatorService) => {
    const toBe = [
      new Robot(1, 1, 3, 'move'),
      new Robot(2, 1, 3, 'move'),
      new Robot(3, 1, 3, 'move')
    ];
    let idx = 0;
    service.moveSeq('place 1,1,east\nmove\nmove').subscribe((position: Robot) => {
      expect(position.x).toBe(toBe[idx].x);
      expect(position.y).toBe(toBe[idx].y);
      expect(position.direction).toBe(toBe[idx].direction);
      idx++;
    });
  }));

  it('move east - not safe', inject([RobotSimulatorService], (service: RobotSimulatorService) => {
    const toBe = [
      new Robot(3, 2, 3, 'place'),
      new Robot(4, 2, 3, 'move'),
      new Robot(4, 2, 3, 'unsafe')
    ];
    let idx = 0;
    service.moveSeq('place 3,2,east\nmove\nmove').subscribe((position: Robot) => {
      expect(position.x).toBe(toBe[idx].x);
      expect(position.y).toBe(toBe[idx].y);
      expect(position.direction).toBe(toBe[idx].direction);
      idx++;
    });
  }));

  it('move south - safe', inject([RobotSimulatorService], (service: RobotSimulatorService) => {
    const toBe = [
      new Robot(2, 4, 2, 'place'),
      new Robot(2, 3, 2, 'move'),
      new Robot(2, 2, 2, 'move')
    ];
    let idx = 0;
    service.moveSeq('place 2,4,south\nmove\nmove').subscribe((position: Robot) => {
      expect(position.x).toBe(toBe[idx].x);
      expect(position.y).toBe(toBe[idx].y);
      expect(position.direction).toBe(toBe[idx].direction);
      idx++;
    });
  }));

  it('move south - not safe', inject([RobotSimulatorService], (service: RobotSimulatorService) => {
    const toBe = [
      new Robot(2, 1, 2, 'place'),
      new Robot(2, 0, 2, 'move'),
      new Robot(2, 0, 2, 'unsafe')
    ];
    let idx = 0;
    service.moveSeq('place 2,1,south\nmove\nmove').subscribe((position: Robot) => {
      expect(position.x).toBe(toBe[idx].x);
      expect(position.y).toBe(toBe[idx].y);
      expect(position.direction).toBe(toBe[idx].direction);
      expect(position.status).toBe(toBe[idx].status);
      idx++;
    });
  }));

  it('move west - safe', inject([RobotSimulatorService], (service: RobotSimulatorService) => {
    const toBe = [
      new Robot(4, 1, 1, 'move'),
      new Robot(3, 1, 1, 'move'),
      new Robot(2, 1, 1, 'move')
    ];
    let idx = 0;
    service.moveSeq('place 4,1,west\nmove\nmove').subscribe((position: Robot) => {
      expect(position.x).toBe(toBe[idx].x);
      expect(position.y).toBe(toBe[idx].y);
      expect(position.direction).toBe(toBe[idx].direction);
      idx++;
    });
  }));

  it('move west - not safe', inject([RobotSimulatorService], (service: RobotSimulatorService) => {
    const toBe = [
      new Robot(1, 2, 1, 'place'),
      new Robot(0, 2, 1, 'move'),
      new Robot(0, 2, 1, 'unsafe')
    ];
    let idx = 0;
    service.moveSeq('place 1,2,west\nmove\nmove').subscribe((position: Robot) => {
      expect(position.x).toBe(toBe[idx].x);
      expect(position.y).toBe(toBe[idx].y);
      expect(position.direction).toBe(toBe[idx].direction);
      idx++;
    });
  }));

  it('west turn right -', inject([RobotSimulatorService], (service: RobotSimulatorService) => {
    const toBe = [
      new Robot(1, 2, 1, 'place'),
      new Robot(1, 2, 0, 'move'),
    ];
    let idx = 0;
    service.moveSeq('place 1,2,west\nright').subscribe((position: Robot) => {
      expect(position.x).toBe(toBe[idx].x);
      expect(position.y).toBe(toBe[idx].y);
      expect(position.direction).toBe(toBe[idx].direction);
      idx++;
    });
  }));

  it('east turn right -', inject([RobotSimulatorService], (service: RobotSimulatorService) => {
    const toBe = [
      new Robot(1, 2, 3, 'place'),
      new Robot(1, 2, 2, 'move'),
    ];
    let idx = 0;
    service.moveSeq('place 1,2,east\nright').subscribe((position: Robot) => {
      expect(position.x).toBe(toBe[idx].x);
      expect(position.y).toBe(toBe[idx].y);
      expect(position.direction).toBe(toBe[idx].direction);
      idx++;
    });
  }));

  it('north turn right -', inject([RobotSimulatorService], (service: RobotSimulatorService) => {
    const toBe = [
      new Robot(1, 2, 0, 'place'),
      new Robot(1, 2, 3, 'move'),
    ];
    let idx = 0;
    service.moveSeq('place 1,2,north\nright').subscribe((position: Robot) => {
      expect(position.x).toBe(toBe[idx].x);
      expect(position.y).toBe(toBe[idx].y);
      expect(position.direction).toBe(toBe[idx].direction);
      idx++;
    });
  }));

  it('south turn right -', inject([RobotSimulatorService], (service: RobotSimulatorService) => {
    const toBe = [
      new Robot(1, 2, 2, 'place'),
      new Robot(1, 2, 1, 'move'),
    ];
    let idx = 0;
    service.moveSeq('place 1,2,south\nright').subscribe((position: Robot) => {
      expect(position.x).toBe(toBe[idx].x);
      expect(position.y).toBe(toBe[idx].y);
      expect(position.direction).toBe(toBe[idx].direction);
      idx++;
    });
  }));


  it('west turn left -', inject([RobotSimulatorService], (service: RobotSimulatorService) => {
    const toBe = [
      new Robot(1, 2, 1, 'place'),
      new Robot(1, 2, 2, 'move'),
    ];
    let idx = 0;
    service.moveSeq('place 1,2,west\nleft').subscribe((position: Robot) => {
      expect(position.x).toBe(toBe[idx].x);
      expect(position.y).toBe(toBe[idx].y);
      expect(position.direction).toBe(toBe[idx].direction);
      idx++;
    });
  }));

  it('east turn left -', inject([RobotSimulatorService], (service: RobotSimulatorService) => {
    const toBe = [
      new Robot(1, 2, 3, 'place'),
      new Robot(1, 2, 0, 'move'),
    ];
    let idx = 0;
    service.moveSeq('place 1,2,east\nleft').subscribe((position: Robot) => {
      expect(position.x).toBe(toBe[idx].x);
      expect(position.y).toBe(toBe[idx].y);
      expect(position.direction).toBe(toBe[idx].direction);
      idx++;
    });
  }));

  it('north turn left -', inject([RobotSimulatorService], (service: RobotSimulatorService) => {
    const toBe = [
      new Robot(1, 2, 0, 'place'),
      new Robot(1, 2, 1, 'move'),
    ];
    let idx = 0;
    service.moveSeq('place 1,2,north\nleft').subscribe((position: Robot) => {
      expect(position.x).toBe(toBe[idx].x);
      expect(position.y).toBe(toBe[idx].y);
      expect(position.direction).toBe(toBe[idx].direction);
      idx++;
    });
  }));

  it('south turn left -', inject([RobotSimulatorService], (service: RobotSimulatorService) => {
    const toBe = [
      new Robot(1, 2, 2, 'place'),
      new Robot(1, 2, 3, 'move'),
    ];
    let idx = 0;
    service.moveSeq('place 1,2,south\nleft').subscribe((position: Robot) => {
      expect(position.x).toBe(toBe[idx].x);
      expect(position.y).toBe(toBe[idx].y);
      expect(position.direction).toBe(toBe[idx].direction);
      idx++;
    });
  }));

});
