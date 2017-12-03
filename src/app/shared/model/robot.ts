import { Direction } from './direction.enum';

export class Robot {
  public x: number;
  public y: number;
  public direction: Direction;
  constructor(x: number, y: number, direction: Direction) {
    this.x = x;
    this.y = y;
    this.direction = direction;
  }
}
