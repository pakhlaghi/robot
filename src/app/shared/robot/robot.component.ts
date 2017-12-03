import { Robot } from './../model/robot';
import { Direction } from './../model/direction.enum';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'rob-robot',
  templateUrl: './robot.component.html',
  styleUrls: ['./robot.component.scss']
})
export class RobotComponent {
  @Input() public pos: Robot ;
  public direction = Direction;
}
