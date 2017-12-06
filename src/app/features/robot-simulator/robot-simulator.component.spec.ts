import { Robot } from './../../shared/model/robot';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { element } from 'protractor';
import { RobotComponent } from './../../shared/robot/robot.component';
import { RobotSimulatorService } from './robot-simulator.service';
import { LoggerService } from './../../core/logger.service';
import { async, ComponentFixture, TestBed, fakeAsync, tick, flushMicrotasks } from '@angular/core/testing';

import { RobotSimulatorComponent } from './robot-simulator.component';

describe('RobotSimulatorComponent', () => {
  let component: RobotSimulatorComponent;
  let fixture: ComponentFixture<RobotSimulatorComponent>;
  let el;

  // stub service and set method output

  const robotSimulatorServiceStub = {
    checkValidCommand: jasmine.createSpy('checkValidCommand'),
    moveSeq: jasmine.createSpy('moveSeq')
  }

  const loggerServiceStub = {
    log: jasmine.createSpy('log')
  }

  beforeEach(async(() => {

    TestBed.configureTestingModule({
      declarations: [ RobotSimulatorComponent, RobotComponent ],
      providers: [
        {provide: RobotSimulatorService, useValue: robotSimulatorServiceStub},
        {provide: LoggerService, useValue: loggerServiceStub}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RobotSimulatorComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement.nativeElement;
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('invalid command => show error message', () => {
    robotSimulatorServiceStub.checkValidCommand.and.returnValue(false);

    component.move('invalid command');
    fixture.detectChanges();
    expect(component.message).toBe('invalid Command or direction, the command should start with \'PLACE\'');
    expect(el.querySelector('.message').textContent).toContain('invalid Command or direction, the command should start with \'PLACE\'');
  });


});
