import { Observable } from 'rxjs/Observable';
import { Direction } from './../../shared/model/direction.enum';
import { Robot } from './../../shared/model/robot';
import { Injectable } from '@angular/core';
import 'rxjs/add/observable/from';

@Injectable()
export class RobotSimulatorService {

  private currentPosition: Robot;
  private commandArr = ['move', 'place', 'left', 'right', 'report'];
  private config: {
    table: {
      x: 5,
      y: 5
    }
  }

  constructor() { }

  public moveSeq(command: string): any {
    const cArray = this.toCommandsArr(command.trim().toLowerCase());
    const moveCommand = [];

    cArray.forEach((cmd: string, index: number) => {
      if (this.validateCommand(cmd, index)) {
        // get next position
        if (cmd === 'report') {
          this.currentPosition.status = 'report';
          moveCommand.push(this.currentPosition);
        } else {
          const p: Robot = this.generatePosition(cmd);
          // add to command seq if safe
          if (this.safeToMove(p)) {
            this.currentPosition = p;
            moveCommand.push(p);
          } else {
            this.currentPosition.status = 'unsafe';
            moveCommand.push(this.currentPosition);
          }
        }
      }
    });

    return Observable.from(moveCommand);
  }

  public checkValidCommand(command: string) {
    const dir = command.split('\n')[0].split(' ')[1].split(',')[2].trim();
    return command.toLowerCase().trim().indexOf('place') === 0 && Direction[dir] >= 0 ? true : false;
  }

  private toCommandsArr(command: string): string[] {
    return command.split('\n');
  }

  private validateCommand(command: string, index: number) {
    // extract command
    const cmd = command.indexOf(' ') > 0 ? command.split(' ')[0] : command;

    // check for valid command
    return this.commandArr.indexOf(cmd) >= 0 ? true : false;
  }

  private generatePosition(command: string) {
    let nextPosition: Robot;
    const cmd = command.indexOf(' ') > 0 ? command.split(' ')[0] : command;

    switch (cmd) {
      case 'move':
        nextPosition = this.move();
        break;
      case 'left':
        nextPosition = this.rotate('ccw');
        break;
      case 'right':
        nextPosition = this.rotate('cw');
        break;
      case 'place':
        const p = command.split(' ')[1].replace(' ', '');
        nextPosition = new Robot(parseInt(p.split(',')[0]), parseInt(p.split(',')[1]), Direction[p.split(',')[2]], 'place');
        break;
      default:
        break;
    }

    return nextPosition;
  }

  private move(): Robot {
    let position: Robot;
    switch (this.currentPosition.direction) {
      case 0: // north
        position = new Robot(this.currentPosition.x, this.currentPosition.y + 1, this.currentPosition.direction, 'move');
        break;
      case 1: // west
        position = new Robot(this.currentPosition.x - 1, this.currentPosition.y, this.currentPosition.direction, 'move');
        break;
      case 2: // south
        position = new Robot(this.currentPosition.x, this.currentPosition.y - 1, this.currentPosition.direction, 'move');
        break;
      case 3: // east
        position = new Robot(this.currentPosition.x + 1, this.currentPosition.y, this.currentPosition.direction, 'move');
        break;
      default:
        break;
    }
    return position;
  }

  private rotate(direction: string): Robot {
    let position: Robot;
    let dir;

    if (direction === 'cw') {
      dir = this.currentPosition.direction - 1 === -1 ? 3 : this.currentPosition.direction - 1;
      position = new Robot(this.currentPosition.x, this.currentPosition.y, dir, 'cw');
    } else {
      dir = this.currentPosition.direction + 1 === 4 ? 0 : this.currentPosition.direction + 1;
      position = new Robot(this.currentPosition.x, this.currentPosition.y, dir, 'ccw');
    }

    return position;
  }

  private safeToMove(position: Robot) {
    return (position.x >= 0 && position.x < 5 && position.y < 5 && position.y >= 0) ? true : false;
  }
}
