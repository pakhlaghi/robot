import { Robot } from './../model/robot';
import { Direction } from './../model/direction.enum';
import { Component, Input} from '@angular/core';

@Component({
  selector: 'rob-robot',
  templateUrl: './robot.component.html',
  styleUrls: ['./robot.component.scss']
})
export class RobotComponent {
  @Input() public x: any;
  @Input() public y: any;
  @Input() public dir: any;
  @Input() public status: string;
  public direction = Direction;
}
