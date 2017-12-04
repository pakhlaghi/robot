import { LoggerService } from './../../core/logger.service';
import { Robot } from './../../shared/model/robot';
import { RobotSimulatorService } from './robot-simulator.service';
import { Direction } from './../../shared/model/direction.enum';
import { Component, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'rob-robot-simulator',
  templateUrl: './robot-simulator.component.html',
  styleUrls: ['./robot-simulator.component.scss']
})
export class RobotSimulatorComponent {
  public position: Robot = new Robot(0, 0, Direction.north, 'place');

  constructor(private rsService: RobotSimulatorService,
    private loggerService: LoggerService,
    private ref: ChangeDetectorRef) { }

  public move(command: string) {

    if (this.rsService.checkValidCommand(command)) {
      const moveSeq = this.rsService.moveSeq(command);

      let ind = 0;
      moveSeq.subscribe((position) => {
        ind++;

        setTimeout(() => {
          this.position = position;
          this.ref.detectChanges();
        }, ind * 1000);
console.log(position);

      });


    } else {
      this.loggerService.log('invalid Command or direction, the command should start with \'PLACE\'');
    }

  }


}
