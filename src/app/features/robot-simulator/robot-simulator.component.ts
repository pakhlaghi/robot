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
  public message: string;

  constructor(private rsService: RobotSimulatorService,
    private loggerService: LoggerService,
    private ref: ChangeDetectorRef) { }

  public move(command: string) {
    this.message = '';
    if (this.rsService.checkValidCommand(command)) {

      let ind = 0;
      this.rsService.moveSeq(command).subscribe((position) => {

        ind++;

        setTimeout(() => {
          this.position = position;
          this.ref.detectChanges();
        }, ind * 1000);

      });

    } else {
      this.message = 'invalid Command or direction, the command should start with \'PLACE\''
      this.loggerService.log(this.message);
    }

  }


}
