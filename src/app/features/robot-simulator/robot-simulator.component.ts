import { LoggerService } from './../../core/logger.service';
import { Robot } from './../../shared/model/robot';
import { RobotSimulatorService } from './robot-simulator.service';
import { Direction } from './../../shared/model/direction.enum';
import { Component } from '@angular/core';

@Component({
  selector: 'rob-robot-simulator',
  templateUrl: './robot-simulator.component.html',
  styleUrls: ['./robot-simulator.component.scss']
})
export class RobotSimulatorComponent {
  public position: Robot = new Robot(0, 0, Direction.north);

  constructor(private rsService: RobotSimulatorService,
    private loggerService: LoggerService) { }

  public move(command: string) {

    if (this.rsService.checkValidCommand(command)) {
      const moveSeq = this.rsService.moveSeq(command);
      moveSeq.forEach((position) => {
        if (position === 'report') {
          this.loggerService.log(this.position.x.toString());
        } else {
            this.position = position;
        }

      });
    } else {
      this.loggerService.log('invalid Command or direction, the command should start with \'PLACE\'');
    }

  }


}
